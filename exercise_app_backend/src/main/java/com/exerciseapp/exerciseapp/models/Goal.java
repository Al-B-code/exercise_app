package com.exerciseapp.exerciseapp.models;

import jakarta.persistence.*;

import java.time.ZonedDateTime;

@Table
@Entity(name = "goals")
public class Goal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String Goal;

    private ZonedDateTime startDate;

    private ZonedDateTime endDate;

    public Goal() {
    }

    public Goal(String goal, ZonedDateTime startDate, ZonedDateTime endDate) {
        Goal = goal;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
