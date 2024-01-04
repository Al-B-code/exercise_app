package com.exerciseapp.exerciseapp.controllers;

import com.exerciseapp.exerciseapp.dtos.UserDTO;
import com.exerciseapp.exerciseapp.models.User;
import com.exerciseapp.exerciseapp.repositories.UserRepository;
import com.exerciseapp.exerciseapp.services.UserService;
import org.apache.tomcat.util.http.parser.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {


    @Autowired
    UserService userService;


    @GetMapping(value = "test")
    public ResponseEntity<String> test(@RequestHeader(name = "Authorization") String authorizationHeader) {


        return new ResponseEntity<>(authorizationHeader, HttpStatus.OK);


    }


    @GetMapping
    public ResponseEntity<UserDTO> getUserDetails(@RequestHeader(name = "Authorization") String authorizationHeader) {
        String token = null;
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            token = authorizationHeader.substring(7);
        }

        User user = userService.getUser(token);
        return userService.getUserDTO(user);

    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<UserDTO> getUserById(@RequestHeader(name = "Authorization") String authorizationHeader) {
        String token = null; // probably should create a helper function for this. There is tokenValid in jwtService should refactor for this.
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            token = authorizationHeader.substring(7);
        }
    }




}
