import React, { useState } from 'react';
import { useAuth } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';





const Register = () => {

    const { setToken, token, headers } = useAuth();

    const [userRegisterInformation, setUserRegisterInformation] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const navigate = useNavigate();

    const handleUserRegisterInformationChange = (event) => {
        const propertyName = event.target.name;
        const copiedUserRegisterInformation = { ...userRegisterInformation };
        copiedUserRegisterInformation[propertyName] = event.target.value;
        setUserRegisterInformation(copiedUserRegisterInformation);
        };

    const handleRegister = (event) => {
        event.preventDefault()

        if (!userRegisterInformation.firstName || !userRegisterInformation.lastName || !userRegisterInformation.email || !userRegisterInformation.password){
            alert("Need to provide all details");
            return;
        }

        if (userRegisterInformation.password !== userRegisterInformation.confirmPassword){
            alert("Passwords don't match!")
            return;
        }


        fetchToken(userRegisterInformation); // This does send an extra object: the confrim password. However, it should still work fine anyway. May need to clean up in the future.
        console.log(token);
        navigate("/", {replace: true});
    };






    const fetchToken = async (userDetails) => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/register', {
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


    return ( 

        <form id="login-form" onSubmit={handleRegister}>
            <p>Registration Page</p>
            <label htmlFor="login-form">Please enter your details</label>

            <input
                id="userFirstName"
                name="firstName"
                type="firstName"
                placeholder="Please Enter Your First Name"
                value={userRegisterInformation.firstName}
                onChange={handleUserRegisterInformationChange}
            />

            <input
                id="userLastName"
                name="lastName"
                type="lastName"
                placeholder="Please Enter Your Last Name"
                value={userRegisterInformation.lastName}
                onChange={handleUserRegisterInformationChange}
            />

            <input
                id="userEmail"
                name="email"
                type="email"
                placeholder="Please Enter Your Email"
                value={userRegisterInformation.email}
                onChange={handleUserRegisterInformationChange}
            />

            <input
                id="userPassword"
                name="password"
                type="password"
                placeholder="Please Enter Your Password"
                value={userRegisterInformation.password}
                onChange={handleUserRegisterInformationChange}
            />

            <input
                id="userConfirmPassword"
                name="confirmPassword"
                type="confirmPassword"
                placeholder="Please Confirm Your Password"
                value={userRegisterInformation.confirmPassword}
                onChange={handleUserRegisterInformationChange}
            />


            <button type="submit">Login</button>

            </form>



    );
}

export default Register;