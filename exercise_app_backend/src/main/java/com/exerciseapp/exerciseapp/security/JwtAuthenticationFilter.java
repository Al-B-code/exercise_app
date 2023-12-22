package com.exerciseapp.exerciseapp.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component // This indicates to spring that this class is a managed bean. could have used service or repository as both extend component.
public class JwtAuthenticationFilter extends OncePerRequestFilter {


    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request, // this allows us to intercept the request and extract data and provide new data in the response
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain // the chain of responsibility design pattern when it is called the next filter when then be called afterwards.
    ) throws ServletException, IOException {

    }
}
