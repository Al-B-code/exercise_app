package com.exerciseapp.exerciseapp.components;

import com.exerciseapp.exerciseapp.models.DailyEntry;
import com.exerciseapp.exerciseapp.models.Role;
import com.exerciseapp.exerciseapp.models.User;
import com.exerciseapp.exerciseapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    UserRepository userRepository;



    @Override
    public void run (ApplicationArguments args) throws Exception {

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        List<DailyEntry> DailyEntries = new ArrayList<>();

        User user = new User(
                "firstNameTest",
                "lastNameTest",
                "test@email.com",
                passwordEncoder.encode("testPassword"),
                Role.ADMIN,
                DailyEntries
        );
        userRepository.save(user);





    }







}
