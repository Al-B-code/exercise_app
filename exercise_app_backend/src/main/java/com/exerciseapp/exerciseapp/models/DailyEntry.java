package com.exerciseapp.exerciseapp.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "dailyEntry")
public class DailyEntry {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false)
    private LocalDate date;

    private Double weight;

    private Integer calorieIntake;

    private Integer sleepDuration;

    private String mood;

    public DailyEntry() {
    }


    public DailyEntry(Long id, User user, Double weight, Integer calorieIntake, Integer sleepDuration, String mood) {
        this.id = id;
        this.user = user;
        this.date = LocalDate.now();
        this.weight = weight;
        this.calorieIntake = calorieIntake;
        this.sleepDuration = sleepDuration;
        this.mood = mood;
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Integer getCalorieIntake() {
        return calorieIntake;
    }

    public void setCalorieIntake(Integer calorieIntake) {
        this.calorieIntake = calorieIntake;
    }

    public Integer getSleepDuration() {
        return sleepDuration;
    }

    public void setSleepDuration(Integer sleepDuration) {
        this.sleepDuration = sleepDuration;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }
}
