package com.exerciseapp.exerciseapp.services;

import com.exerciseapp.exerciseapp.dtos.DailyEntryDTO;
import com.exerciseapp.exerciseapp.models.DailyEntry;
import com.exerciseapp.exerciseapp.models.User;
import com.exerciseapp.exerciseapp.repositories.DailyEntryRepository;
import com.exerciseapp.exerciseapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class DailyEntryService {


    @Autowired
    private DailyEntryRepository dailyEntryRepository;

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<DailyEntry> addOrUpdateDailyEntry(DailyEntryDTO entry) {

        User user = userRepository.findById(entry.getUserId()).get(); // todo add error handling

        Optional<DailyEntry> existingEntryOptional = dailyEntryRepository.findByUserAndDate(user, entry.getDate());

        if (existingEntryOptional.isPresent()) {
            // extracts existing entry out of optional.
            DailyEntry existingEntry = existingEntryOptional.get();
            // update the existing entry
            existingEntry.setWeight(entry.getWeight());
            existingEntry.setCalorieIntake((entry.getCalorieIntake()));
            existingEntry.setSleepDuration(entry.getSleepDuration());
            existingEntry.setMood((entry.getMood()));
            existingEntry.setUser(user);
            return new ResponseEntity<>(dailyEntryRepository.save(existingEntry), HttpStatus.OK);
        } else {
            // creates a new entry

            DailyEntry dailyEntry = new DailyEntry(
                    user,
                    entry.getDate(),
                    entry.getWeight(),
                    entry.getCalorieIntake(),
                    entry.getSleepDuration(),
                    entry.getMood()
            );

            return new ResponseEntity<>(dailyEntryRepository.save(dailyEntry), HttpStatus.CREATED); // on the frontend use the status code to say whether entry is updated or not.
        }
    }

    public List<DailyEntry> getDailyEntriesForUserAndDateRange(User user, ZonedDateTime startDate, ZonedDateTime endDate) {

        Optional<List<DailyEntry>> dailyEntryListOptional = dailyEntryRepository.findAllByUserAndDateBetween(user, startDate, endDate);

        // if the dailyEntryList isPresent it will return the list else, it will return the empty list.
        return dailyEntryListOptional.orElse(Collections.emptyList());
    }

    public List<DailyEntry> getDailyEntriesByUser(User user) {
        Optional<List<DailyEntry>> dailyEntryListOptional = dailyEntryRepository.findByUser(user);

        return dailyEntryListOptional.orElseGet(ArrayList::new); // ArrayList::new is equivalent to () -> new ArrayList<>()

    }


}
