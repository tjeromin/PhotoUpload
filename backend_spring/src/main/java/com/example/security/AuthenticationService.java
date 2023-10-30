package com.example.security;

import com.example.user.UserData;
import com.example.user.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${security.jwt.secret_key}")
    private String SECRET_KEY;
    private static final Logger LOG =
            LoggerFactory.getLogger(AuthenticationService.class);
    private static final long EXPIRATION = 60 * 60 * 1000;

    public String register(String username, String email, String password) {

        UserData userData =
                new UserData(username, email, passwordEncoder.encode(password));
        userRepository.save(userData);
        LOG.info("saved User " + username);

        return generateAccessJwt(userData);
    }

    public String generateAccessJwt(UserData userData) {
        return Jwts
                .builder()
                .subject(String.format("%s,%s",
                        userData.getId(),
                        userData.getUsername()))
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(getSignInKey())
                .compact();
    }

    private SecretKey getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
