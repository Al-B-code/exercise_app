package com.exerciseapp.exerciseapp.controllers;

import com.exerciseapp.exerciseapp.config.JwtService;
import com.exerciseapp.exerciseapp.models.DailyEntry;
import com.exerciseapp.exerciseapp.models.Goal;
import com.exerciseapp.exerciseapp.models.User;
import com.exerciseapp.exerciseapp.services.GoalService;
import com.exerciseapp.exerciseapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("goals")
public class GoalController {

    @Autowired
    UserService userService;

    @Autowired
    GoalService goalService;

    @Autowired
    JwtService jwtService;


    @GetMapping
    public ResponseEntity<List<Goal>> getGoalsList(@RequestHeader(name = "Authorization") String authorizationHeader) {
        User user = userService.getUserByEmail(jwtService.extractUsername(authorizationHeader.substring(7)));
        List<Goal> goalsList = goalService.getGoalsList(user);

        //todo: add error handling for goals list request.

        return new ResponseEntity<>(goalsList, HttpStatus.OK);

    }

    @GetMapping(value = "/completion-status")
    public ResponseEntity<List<Goal>> getGoalListByCompletion(@RequestHeader(name = "Authorization") String authorizationHeader, @RequestParam Boolean isComplete) {
        User user = userService.getUserByEmail(jwtService.extractUsername(authorizationHeader.substring(7)));
        List<Goal> goalsList = goalService.getGoalsListByCompletionStatus(user, isComplete);

        //todo: add error handling for goals list request.

        return new ResponseEntity<>(goalsList, HttpStatus.OK);
    }

}
