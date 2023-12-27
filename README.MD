# Exercise fullstack project.
- Backend: **Spring boot + Spring Security**
- Database: **Postgres**
- Frontend: **React**

---

## Backend:

## Architecture / Structure
- Uses token-based JWT authentication and authorization.
- JWT expire 24 hours and 1000 milliseconds.

## Routes
### "/api/v1/auth/**" 

  - **POST : "/register"**
    - Allows a user to register using registerRequestDTO. Takes in firstName, lastName, email and password. Returns a JWT

  - **POST : "/authenticate"**
    - allows a user to be authenticated by checking their email and password. Returns a JWT.
---
### "/user

  - GET : "/"
    - Returns Current User if logged in.
