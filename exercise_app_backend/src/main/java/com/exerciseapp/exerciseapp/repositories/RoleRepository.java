package com.exerciseapp.exerciseapp.repositories;

import com.exerciseapp.exerciseapp.models.ERole;
import com.exerciseapp.exerciseapp.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
