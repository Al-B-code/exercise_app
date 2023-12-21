package com.exerciseapp.exerciseapp.models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

public class CustomUserDetails implements UserDetails {

    private final User user;


    public CustomUserDetails(User user) {
        this.user = user;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return user.getRoles()
                .stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().toString())) // not sure if converting to string is appropriate.
                .collect(Collectors.toList());
    }


    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public boolean isEnabled() {
        return user.isEnabled();
    }
    @Override
    public boolean isAccountNonExpired() {
        return true; // Modify as needed based on your application logic
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Modify as needed based on your application logic
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Modify as needed based on your application logic
    }

}
