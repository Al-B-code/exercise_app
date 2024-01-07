package com.exerciseapp.exerciseapp.controllers;

import com.exerciseapp.exerciseapp.dtos.UserDTO;
import com.exerciseapp.exerciseapp.models.Role;
import com.exerciseapp.exerciseapp.models.User;
import com.exerciseapp.exerciseapp.repositories.UserRepository;
import com.exerciseapp.exerciseapp.services.UserService;
import org.apache.tomcat.util.http.parser.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

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
    public ResponseEntity<UserDTO> getUserById(@RequestHeader(name = "Authorization") String authorizationHeader,
                                               @PathVariable Long id) {
        String token = null; // probably should create a helper function for this. There is tokenValid in jwtService should refactor for this.
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            token = authorizationHeader.substring(7);
        }
        // only admins should be able to visit any profile. If not admin should return invalid permissions.
        User userMakingRequest = userService.getUser(token);

        // checks if user is admin before return user details. probably a better way using grantedAuthorities in spring security.
        if (userMakingRequest.getRole() == Role.ADMIN || Objects.equals(userMakingRequest.getId(), id)) {
            return userService.getUserDTOById(id);
        } else {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }


    }




}
