package com.exerciseapp.exerciseapp.services;

import com.exerciseapp.exerciseapp.config.JwtService;
import com.exerciseapp.exerciseapp.dtos.UserDTO;
import com.exerciseapp.exerciseapp.models.User;
import com.exerciseapp.exerciseapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {


    @Autowired
    JwtService jwtService;

    @Autowired
    UserRepository userRepository;


    public User getUser(String token) {
        System.out.println(token);
        String email = jwtService.extractUsername(token);
        Optional<User> user = userRepository.findByEmail(email);
        return user.orElse(null);
    }

    public ResponseEntity<UserDTO> getUserDTO(User user) {
        if (user == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        UserDTO userDTO = new UserDTO(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getRole()
        );

        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }




}
