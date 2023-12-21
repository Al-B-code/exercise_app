package com.exerciseapp.exerciseapp.security;

import com.exerciseapp.exerciseapp.services.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.annotation.web.builders.HttpSecurity.antMatchers;


import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(customUserDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .requestMatchers("/secure/**").authenticated()
                .anyRequest().permitAll()
                .and()
                .csrf().disable();
        return http.build();
    }


}

//    @Bean
//    public DaoAuthenticationProvider authenticationProvider() {
//        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//        authProvider.setUserDetailsService(customUserDetailsService);
//        authProvider.setPasswordEncoder(passwordEncoder());
//        return authProvider;
//    }





//    @Bean
//    public SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> securityConfigurerAdapter() {
//        return new SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity>() {
//            @Override
//            public void configure(HttpSecurity http) throws Exception {
//                http
//                        .antMatchers("/public/**").permitAll()
//                        .antMatchers("/user/**").hasRole("USER")
//                        .antMatchers("/admin/**").hasRole("ADMIN")
//                        .anyRequest().authenticated()
//                        .and()
//                        .formLogin()
//                        .and()
//                        .logout();
//            }
//        };
//    }


//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .authorizeHttpRequests((authorize) -> authorize
//                        .anyRequest().authenticated()
//                )
//                .httpBasic(Customizer.withDefaults())
//                .formLogin(Customizer.withDefaults());
//        return http.build();
//    }
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        UserDetails userDetails = User.withDefaultPasswordEncoder()
//                .username("user")
//                .password("password")
//                .roles("USER")
//                .build();
//
//    }



