package com.exerciseapp.exerciseapp.services;

import com.exerciseapp.exerciseapp.models.DailyEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DailyEntryService {

    @Autowired
    public DailyEntry addOrUpdateDailyEntry(DailyEntry entry) {
        DailyEntry existingEntry = DailyEntryRepository.findByUserAndDate(entry.getUser(), entry.getDate());

        if (existingEntry != null) {
            // update the existing entry
            existingEntry.setWeight(entry.getWeight());
            existingEntry.setCalorieIntake((entry.getCalorieIntake()));
            existingEntry.setSleepDuration(entry.getSleepDuration());
            existingEntry.setMood((entry.getMood()));
            return dailyEntryRepository.save(existingEntry);
        } else {
            // creates a new entry
            return dailyEntryReposiory.save(entry);
        }


    }


}
