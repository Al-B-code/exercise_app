package com.exerciseapp.exerciseapp.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.xml.crypto.Data;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service // makes this a managed bean.
public class JwtService { // Jwt service needs 3 main dependencies. jjwt-api, jjwt-jackson and jjwt-impl


    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private static final String SECRET_KEY = "4BEF88A8E88AC99CDE599863EC1D1"; // this will be visible due to being uploaded on git. probably should use an .env

    public String extractUsername(String token) {
         return extractClaim(token, Claims::getSubject);
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails); // this generate token method can be reused later without extra claims like here for example compared to below.
    }

    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis())) // allows us to see if the jwt is valid by checking when it was created.
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24)) // token will be valid for 24 hours + 1000 milliseconds
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact(); // this method generates a token.
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
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
