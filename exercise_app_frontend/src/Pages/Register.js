import React, { useState } from 'react';
import { useAuth } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import "../styles/RegistrationPage.css";





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

        <section className='registration-form-container'>

        <form id="registration-form" onSubmit={handleRegister}>
            <h1>Registration</h1>
            <fieldset className='register-form-first-name-fieldset'>
            <label htmlFor="register-form-first-name-input">Please enter your first name</label>
            <input
                id="user-first-name-register"
                name="firstname"
                type="firstName"
                placeholder="Please Enter Your First Name"
                value={userRegisterInformation.firstName}
                onChange={handleUserRegisterInformationChange}
            />
            </fieldset>

            <fieldset className='register-form-last-name-fieldset'>
            <label htmlFor="register-form-last-name-input">Please enter your last name</label>
            <input
                id="user-last-name-register"
                name="lastName"
                type="lastName"
                placeholder="Please Enter Your Last Name"
                value={userRegisterInformation.lastName}
                onChange={handleUserRegisterInformationChange}
            />
            </fieldset>

            <fieldset className='register-form-email-input'>
            <label htmlFor="register-form-email-input">Please enter your email</label>
            <input
                id="user-email-register"
                name="email"
                type="email"
                placeholder="Please Enter Your Email"
                value={userRegisterInformation.email}
                onChange={handleUserRegisterInformationChange}
            />
            </fieldset>

            <fieldset className='register-form-password-input'>
            <label htmlFor="register-form-password-input">Please enter your password</label>
            <input
                id="user-password-register"
                name="password"
                type="password"
                placeholder="Please Enter Your Password"
                value={userRegisterInformation.password}
                onChange={handleUserRegisterInformationChange}
            />
            </fieldset>

            <fieldset className='register-form-confirm-password-input'>
            <label htmlFor="register-form-confirm-password-input">Please confirm your password</label>
            <input
                id="userConfirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Please Confirm Your Password"
                value={userRegisterInformation.confirmPassword}
                onChange={handleUserRegisterInformationChange}
            />
            </fieldset>


            <button type="submit">Login</button>

            </form>

        </section>




    );
}

export default Register;