package com.cognizant.jwthandson.controller;

import com.cognizant.jwthandson.util.JwtUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        String base64Credentials =
                authHeader.substring("Basic ".length());

        byte[] decoded =
                Base64.getDecoder().decode(base64Credentials);

        String credentials =
                new String(decoded, StandardCharsets.UTF_8);

        String username =
                credentials.split(":")[0];

        String token =
                JwtUtil.generateToken(username);

        return Map.of("token", token);
    }
}