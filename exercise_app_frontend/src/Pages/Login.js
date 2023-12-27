import { useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";

const Login = () => {

    const { setToken, token } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setToken("this is a test token");
        console.log(token);
        navigate("/", {replace: true});
    };
    console.log("Hello from login");

    // setTimeout function is used to simulate a delay of 3 seconds before calling the handleLogin function.
    setTimeout(() => {
        handleLogin();
        console.log("hello from setTimeout.")
    }, 3 * 1000); // 3 x 1000 milliseconds.



    return ( 
        <>
        Login Page
        </>
    );
}
 
export default Login;