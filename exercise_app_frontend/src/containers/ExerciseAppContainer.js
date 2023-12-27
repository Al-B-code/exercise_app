import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayoutRouter from "../components/AppLayoutRouter";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../Provider/AuthProvider";

const ExerciseAppContainer = () => {
    
    
    const [currentUser, setCurrentUser] = useState(null);

    // fetch request to authenticate current user and get their JWT token.



    
    
    
    
    return (
        <>
        <p>Hello from ExerciseAppContainer</p>
        </> 

    );
}

export default ExerciseAppContainer;