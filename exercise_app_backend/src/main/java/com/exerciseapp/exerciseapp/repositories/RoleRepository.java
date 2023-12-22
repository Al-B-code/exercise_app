package com.exerciseapp.exerciseapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {


    Role findByName(String name);
}
