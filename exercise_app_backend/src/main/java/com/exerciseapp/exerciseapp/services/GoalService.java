package com.exerciseapp.exerciseapp.services;

import com.exerciseapp.exerciseapp.models.Goal;
import com.exerciseapp.exerciseapp.models.User;
import com.exerciseapp.exerciseapp.repositories.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GoalService {


    @Autowired
    GoalRepository goalRepository;


    public List<Goal> getGoalsList(User user) {

        List<Goal> goalsList = goalRepository.findAllByUser(user).get();
        return goalsList;

    }

    public List<Goal> getGoalsListByCompletionStatus(User user, Boolean isComplete) {
        List<Goal> goalsList = goalRepository.findAllByUserAndIsComplete(user, isComplete).get();
        return  goalsList;
    }

}
