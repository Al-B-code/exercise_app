package com.exerciseapp.exerciseapp.repositories;

import com.exerciseapp.exerciseapp.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface RoleRepository extends JpaRepository<Role, Long> {


    Role findByName(String name);
}
