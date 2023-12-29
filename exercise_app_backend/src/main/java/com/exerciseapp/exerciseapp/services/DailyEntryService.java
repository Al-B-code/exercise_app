package com.exerciseapp.exerciseapp.services;

import com.exerciseapp.exerciseapp.models.DailyEntry;
import com.exerciseapp.exerciseapp.repositories.DailyEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DailyEntryService {


    @Autowired
    private DailyEntryRepository dailyEntryRepository;


    public DailyEntry addOrUpdateDailyEntry(DailyEntry entry) {

        Optional<DailyEntry> existingEntryOptional = dailyEntryRepository.findByUserAndDate(entry.getUser(), entry.getDate());

        if (existingEntryOptional.isPresent()) {
            // extracts existing entry out of optional.
            DailyEntry existingEntry = existingEntryOptional.get();
            // update the existing entry
            existingEntry.setWeight(entry.getWeight());
            existingEntry.setCalorieIntake((entry.getCalorieIntake()));
            existingEntry.setSleepDuration(entry.getSleepDuration());
            existingEntry.setMood((entry.getMood()));
            return dailyEntryRepository.save(existingEntry);
        } else {
            // creates a new entry
            return dailyEntryRepository.save(entry);
        }


    }


}
