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
### "/user/**"

  - **GET : "/"**
    - Returns Current User if logged in.
      - Takes in Authorisation Header to get current user.
  - **GET : "{id}"**
    - Returns info for request user based on users permissions. Only Admins can see other profiles as of current.
      - Takes in Authorisation Header to get current user.
---

### "/goals/**"
  - **GET : "/"**
    - Get goals list of current user.
      - Takes in Authorisation Header to get current user.
  - **GET : "/completion-status?isComplete={True or False}**
    - Will get goals list based on completion status of the goal. Either true or false.
      - Takes in Authorisation Header to get current user.

---

### "/daily-entries/**"
  - **GET : "/"**
    - Get daily entries of current user.
      - Takes in Authorisation Header to get current user.
  - **PUT : "/"**
    - Create a new Daily Entry or Update.
      - Takes in a request body of a DailyEntryDTO.
      - Takes in Authorisation Header to get current user.



    
