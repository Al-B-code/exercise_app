package com.exerciseapp.exerciseapp.controllers;

import com.exerciseapp.exerciseapp.config.JwtService;
import com.exerciseapp.exerciseapp.dtos.DailyEntryDTO;
import com.exerciseapp.exerciseapp.models.DailyEntry;
import com.exerciseapp.exerciseapp.models.User;
import com.exerciseapp.exerciseapp.services.DailyEntryService;
import com.exerciseapp.exerciseapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("daily-entries")
public class DailyEntryController {

    @Autowired
    UserService userService;

    @Autowired
    JwtService jwtService;

    @Autowired
    DailyEntryService dailyEntryService;



    @GetMapping
    public ResponseEntity<List<DailyEntry>> getDailyEntryList(@RequestHeader(name = "Authorization") String authorizationHeader) {
        User user = userService.getUserByEmail(jwtService.extractUsername(authorizationHeader.substring(7)));
        List<DailyEntry> dailyEntryList = dailyEntryService.getDailyEntriesByUser(user);


        return new ResponseEntity<>(dailyEntryList, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<DailyEntry> createNewDailyEntryOrUpdate (@RequestBody DailyEntryDTO dailyEntry, @RequestHeader(name = "Authorization") String authorizationHeader) {

        String token = null; // probably should create a helper function for this. There is tokenValid in jwtService should refactor for this.
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            token = authorizationHeader.substring(7);
        }
        // only admins should be able to visit any profile. If not admin should return invalid permissions.
        User userMakingRequest = userService.getUser(token);


        return dailyEntryService.addOrUpdateDailyEntry(dailyEntry, userMakingRequest);
    }


}
