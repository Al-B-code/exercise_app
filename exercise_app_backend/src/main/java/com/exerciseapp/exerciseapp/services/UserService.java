package com.exerciseapp.exerciseapp.services;

import com.exerciseapp.exerciseapp.models.User;
import com.exerciseapp.exerciseapp.repositories.RoleRepository;
import com.exerciseapp.exerciseapp.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
@Transactional
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

//    public User registerNewUserAccount(UserDto accountDto) throws EmailExistsException {
//
//        if (emailExists(accountDto.getEmail())) {
//            throw new EmailExistsException
//                    ("There is an account with that email address: " + accountDto.getEmail());
//        }
//        User user = new User();
//
//        user.setFirstName(accountDto.getFirstName());
//        user.setLastName(accountDto.getLastName());
//        user.setPassword(passwordEncoder.encode(accountDto.getPassword()));
//        user.setEmail(accountDto.getEmail());
//
//        user.setRoles(Arrays.asList(roleRepository.findByName("ROLE_USER")));
//        return userRepository.save(user);
//    }



}
