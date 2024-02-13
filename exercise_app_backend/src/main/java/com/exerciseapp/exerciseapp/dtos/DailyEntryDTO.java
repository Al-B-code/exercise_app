package com.exerciseapp.exerciseapp.dtos;

import java.time.ZonedDateTime;

public class DailyEntryDTO {


    private Long userId;
    private ZonedDateTime date;

    private Double weight;

    private Integer calorieIntake;

    private Double sleepDuration;

    private String mood;


    public DailyEntryDTO() {
    }

    public DailyEntryDTO(Long userId, ZonedDateTime date, Double weight, Integer calorieIntake, Double sleepDuration, String mood) {
        this.userId = userId;
        this.date = date;
        this.weight = weight;
        this.calorieIntake = calorieIntake;
        this.sleepDuration = sleepDuration;
        this.mood = mood;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public void setDate(ZonedDateTime date) {
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

    public Double getSleepDuration() {
        return sleepDuration;
    }

    public void setSleepDuration(Double sleepDuration) {
        this.sleepDuration = sleepDuration;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }
}
