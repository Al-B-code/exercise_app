package com.exerciseapp.exerciseapp.repositories;

import com.exerciseapp.exerciseapp.models.Privilege;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrivilegeRepository extends JpaRepository<Privilege, Long> {

    Privilege findByName(String name);
}
