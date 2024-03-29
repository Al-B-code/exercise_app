package com.exerciseapp.exerciseapp.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component // This indicates to spring that this class is a managed bean. could have used service or repository as both extend component.
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    private final UserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }


    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request, // this allows us to intercept the request and extract data and provide new data in the response
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain // the chain of responsibility design pattern when it is called the next filter when then be called afterwards.
    ) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization"); // this is the header that contains the JWT token.
        final String jwt;
        final String userEmail;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) { // basic jwt / header check. if invalid go to next step in filter chain.
            filterChain.doFilter(request, response);
            return;
        }

        jwt = authHeader.substring(7); // it is 7 because the first character after bearer will be the jwt token.
        userEmail = jwtService.extractUsername(jwt);// todo extract the user email from JWT token;
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) { // when the getauthenticatin is nul lthe user is not authenticated yet.
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
            if (jwtService.isTokenValid(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null, // when we create a user they dont have credentials that is why it is a null value.
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }

        }
        filterChain.doFilter(request, response);
    }
}
