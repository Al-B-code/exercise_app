package com.exerciseapp.exerciseapp.repositories;

import com.exerciseapp.exerciseapp.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
