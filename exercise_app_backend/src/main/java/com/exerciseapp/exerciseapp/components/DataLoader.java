package com.exerciseapp.exerciseapp.components;

import com.exerciseapp.exerciseapp.models.DailyEntry;
import com.exerciseapp.exerciseapp.models.Goal;
import com.exerciseapp.exerciseapp.models.Role;
import com.exerciseapp.exerciseapp.models.User;
import com.exerciseapp.exerciseapp.repositories.DailyEntryRepository;
import com.exerciseapp.exerciseapp.repositories.GoalRepository;
import com.exerciseapp.exerciseapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    UserRepository userRepository;

    @Autowired
    DailyEntryRepository dailyEntryRepository;


    @Autowired
    GoalRepository goalRepository;



    @Override
    public void run (ApplicationArguments args) throws Exception {

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        List<DailyEntry> DailyEntries = new ArrayList<>();

        User user = new User(
                "John",
                "Doe",
                "john@email.com",
                passwordEncoder.encode("1234"), // has to be encoded on the backend otherwise the hashed passwords wont match, will change at one point
                Role.ADMIN,
                DailyEntries
        );
        userRepository.save(user);

        DailyEntry dailyEntry1 = new DailyEntry(
                user,
                ZonedDateTime.of(2023, 9, 30, 12, 30, 0, 0, ZoneId.of("UTC")),
                112D,
                1500,
                8,
                "Feeling good"
        );

        dailyEntryRepository.save(dailyEntry1);


        ZonedDateTime date = ZonedDateTime.of(2023, 10, 30, 12, 30, 0, 0, ZoneId.of("UTC"));

        DailyEntry dailyEntry2 = new DailyEntry(
                user,
                date,
                110D,
                1500,
                8,
                "Feeling great"
        );
        dailyEntryRepository.save(dailyEntry2);

        DailyEntry dailyEntry3 = new DailyEntry(
                user,
                ZonedDateTime.of(2023, 11, 30, 12, 30, 0, 0, ZoneId.of("UTC")),
                108D,
                1500,
                7,
                "Feeling ok"
        );
        dailyEntryRepository.save(dailyEntry3);


        Goal goal = new Goal(
                user,
                "Go on a walk every day",
                ZonedDateTime.now(),
                ZonedDateTime.of(2024, 2, 29, 23, 59, 59, 59, ZoneId.of("UTC"))
        );

        goalRepository.save(goal);







        User user2 = new User(
                "Jane",
                "Doe",
                "jane@email.com",
                passwordEncoder.encode("1234"), // has to be encoded on the backend otherwise the hashed passwords wont match, will change at one point
                Role.USER,
                DailyEntries
        );

        userRepository.save(user2);


        DailyEntry dailyEntry4 = new DailyEntry(
                user2,
                ZonedDateTime.now(),
                50D,
                1200,
                6,
                "Feeling okay"
        );
        dailyEntryRepository.save(dailyEntry4);


    }







}
