package com.exerciseapp.exerciseapp.repositories;

import com.exerciseapp.exerciseapp.models.Goal;
import com.exerciseapp.exerciseapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GoalRepository extends JpaRepository<Goal, Long> {

    Optional<List<Goal>> findAllByUser(User user);

    // todo create a query to find goals between a certain date?
}
