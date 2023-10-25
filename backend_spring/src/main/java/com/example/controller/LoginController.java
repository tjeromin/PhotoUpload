package com.example.controller;

import com.example.DemoApplication;
import com.example.services.DemoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(DemoApplication.class);

    @Autowired
    private DemoService demoService;

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        demoService.demo();
        return String.format("Hello %s!", name);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login() {
        logger.info("login received");

        return ResponseEntity.ok("test123123");
    }
}
