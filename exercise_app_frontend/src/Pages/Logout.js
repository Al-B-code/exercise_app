import { useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";





const Logout = () => {
    
    const {setToken, token} = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        setToken();
        navigate("/", { replace: true});
    };

    console.log("This is the test token: " + token);

    setTimeout(() => {
        handleLogout();
    }, 3 * 1000);
    
    return ( 
        <>
            Logout Page
        </>

    );
}

export default Logout;