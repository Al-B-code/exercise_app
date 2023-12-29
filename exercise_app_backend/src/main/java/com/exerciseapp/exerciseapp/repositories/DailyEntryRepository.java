package com.exerciseapp.exerciseapp.repositories;

import com.exerciseapp.exerciseapp.models.DailyEntry;
import com.exerciseapp.exerciseapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface DailyEntryRepository extends JpaRepository<DailyEntry, Long> {

    Optional<DailyEntry> findByUserAndDate(User user, ZonedDateTime date);

    Optional<List<DailyEntry>> findAllByUserAndDateBetween(User user, ZonedDateTime startDate, ZonedDateTime endDate);


}
