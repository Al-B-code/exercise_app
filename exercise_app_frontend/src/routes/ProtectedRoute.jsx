import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";



export const ProtectedRoute = () => {
    const { token } = useAuth();

    // check if the user is authenticated 
    if (!token) {
        // if the user is not authenticated return to the login page.
        return <Navigate to="/login" />;
    }

    // If authenticated, render the child routes.
    return <Outlet/>
};