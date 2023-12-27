import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayoutRouter from "../components/AppLayoutRouter";
import LoginForm from "../components/LoginForm";

const ExerciseAppContainer = () => {
    
    
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    // fetch request to authenticate current user and get their JWT token.
    const fetchToken= async (userLogin) => {

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userLogin)
            })
            const data = response.json();
            setToken = data;
        } catch (error) {
            console.error("error logging in: ", error)
        }
    } 


    
    
    
    
    return (
        <>
        <p>Hello from ExerciseAppContainer</p>
        </> 

    );
}

export default ExerciseAppContainer;