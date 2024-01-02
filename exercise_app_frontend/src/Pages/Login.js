import { useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { useState } from "react";

const Login = () => {

    const { setToken, token, headers } = useAuth();
    const navigate = useNavigate();


    const [userLoginInformation, setUserLoginInformation] = useState({
        email: '',
        password: '',
    })


    const handleUserLoginInformationChange = (event) => {
        const propertyName = event.target.name;
        const copiedUserLoginInformation = { ...userLoginInformation };
        copiedUserLoginInformation[propertyName] = event.target.value;
        setUserLoginInformation(copiedUserLoginInformation);
        };

    const handleLogin = (event) => {
        event.preventDefault()
        fetchToken(userLoginInformation);
        console.log(token);
        navigate("/", {replace: true});
    };


    const fetchToken = async (userDetails) => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userDetails)
            })
            const data = await response.json();
            console.log(data);
            setToken(data);
            console.log("this is the data", data);
            console.log("This is the headers.Authorization", headers.Authorization)
        } catch (error) {
            console.error("error logging in: ", error)
        }
    } 

    // console.log(headers.Authorization);



    // // setTimeout function is used to simulate a delay of 3 seconds before calling the handleLogin function.
    // setTimeout(() => {
    //     handleLogin();
    //     console.log("hello from setTimeout.")
    // }, 3 * 1000); // 3 x 1000 milliseconds.



    return ( 
        <>
        <form id="login-form" onSubmit={handleLogin}>
            <p>Login Page</p>
            <label htmlFor="login-form">Please enter your details</label>
            <input
                id="userEmail"
                name="email"
                type="email"
                placeholder="Please Enter Your Email"
                value={userLoginInformation.email}
                onChange={handleUserLoginInformationChange}
            />

            <input
                id="userPassword"
                name="password"
                type="password"
                placeholder="Please Enter Your Password"
                value={userLoginInformation.password}
                onChange={handleUserLoginInformationChange}
            />

            <button type="submit">Login</button>

        </form>
        </>
    );
}

export default Login;