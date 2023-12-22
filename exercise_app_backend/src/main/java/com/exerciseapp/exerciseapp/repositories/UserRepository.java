package com.exerciseapp.exerciseapp.repositories;

import com.exerciseapp.exerciseapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {


}
