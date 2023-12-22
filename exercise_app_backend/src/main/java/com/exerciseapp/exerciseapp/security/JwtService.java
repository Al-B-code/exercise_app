package com.exerciseapp.exerciseapp.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Base64;

@Service // makes this a managed bean.
public class JwtService { // Jwt service needs 3 main dependencies. jjwt-api, jjwt-jackson and jjwt-impl


    private static final String SECRET_KEY = "4BEF88A8E88AC99CDE599863EC1D1"; // this will be visible due to being uploaded on git. probably should use an .env

    public String extractUsername(String token) {
        return null; // todo extract username
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey()) // a sign in key is a secret that is used to digitally sign a jwt. it is used to create the signature part of the jwt. helps us ensure that the sender of the jwt is who they claim to be and that the message wasn't modified along the way.
                .build() // sign in keys for security reasons right now should be a minimum of 256 characters long.
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY); // once decoded we can return the key bytes back.
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
