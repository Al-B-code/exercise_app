import { useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import "../styles/UserDashboard.css"





const Logout = () => {
    
    const {setToken, token} = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        setToken();
        navigate("/", { replace: true});
    };



    // setTimeout(() => {
    //     handleLogout();
    // }, 3 * 1000);
    
    return ( 
        <>
            <button onClick={handleLogout} id="logout-button">Logout</button>
        </>

    );
}

export default Logout;