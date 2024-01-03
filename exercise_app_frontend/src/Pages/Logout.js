import { useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";





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
            <button onClick={handleLogout}>Logout</button>
        </>

    );
}

export default Logout;