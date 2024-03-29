package com.exerciseapp.exerciseapp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore // This is to avoid recursion error; May need to use jsonViews in the future. Check chatroom backend for howto.
    private User user;

    private String Goal;

    private ZonedDateTime startDate;

    private ZonedDateTime endDate;

    private Boolean isComplete;

    public Goal() {
    }

    public Goal(User user, String goal, ZonedDateTime startDate, ZonedDateTime endDate) {
        this.user = user;
        this.Goal = goal;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isComplete = false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getGoal() {
        return Goal;
    }

    public void setGoal(String goal) {
        Goal = goal;
    }

    public ZonedDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(ZonedDateTime startDate) {
        this.startDate = startDate;
    }

    public ZonedDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(ZonedDateTime endDate) {
        this.endDate = endDate;
    }

    public Boolean getComplete() {
        return isComplete;
    }

    public void setComplete(Boolean complete) {
        isComplete = complete;
    }
}
