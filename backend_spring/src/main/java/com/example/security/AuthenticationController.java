package com.example.security;

import com.example.DemoApplication;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private static final Logger LOG = LoggerFactory.getLogger(DemoApplication.class);

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestParam(value = "username") String username,
                                                 @RequestParam(value = "email") String email,
                                                 @RequestParam(value = "password") String password) {
        String token = authenticationService.register(username, email, password);
        AuthResponse response = new AuthResponse(token);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login() {
        LOG.info("login received");

        return ResponseEntity.ok("test123123");
    }
}
