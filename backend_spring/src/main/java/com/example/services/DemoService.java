package com.example.services;

import com.example.DemoApplication;
import com.example.data.entities.UserData;
import com.example.data.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DemoService {
    private static final Logger log = LoggerFactory.getLogger(DemoApplication.class);

    private UserRepository userRepository;

    public void demo() {
        userRepository.save(new UserData("Peter"));
        log.info("saved User");
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
