import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import "../styles/LoginPage.css"
import { Link } from "react-router-dom";


const Login = () => {



    const { setToken, token, headers } = useAuth();

    const { loginUser } = useContext(UserContext);

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

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            await fetchToken(userLoginInformation);

            navigate("/", { replace: true });
        } catch (error) {
            console.log("Error during login: ", error);
        }
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
            setToken(data.token);
            fetchUser(data.token);
            console.log("this is the data", data);
            // console.log("This is the token set", token);
        } catch (error) {
            console.error("error logging in: ", error)
        }

    }
    
    const fetchUser = async (token) => {
        try {
            const response = await fetch('http://localhost:8080/user', {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error, Status: ${response.status}`);
            }
            const data = await response.json()
            // console.log("This should be user data: " + JSON.stringify(data));
            loginUser(data);
        } catch (error) {
            console.error("error fetching user: ", error)
        }
    }

    // useEffect(() => {
    //     // This will log the updated token whenever it changes


    //         console.log("Token updated:", token);

    // }, [token]);







    return ( 
        <div className="login-page-container">
            <section className="login-form-container">
            <h1>Sign in</h1>
                <form id="login-form" onSubmit={handleLogin}>
                    <fieldset className="login-form-email-container">
                        <label htmlFor="login-form-email-input" className="login-form-email-input">Email</label>
                        <input
                            id="userEmail"
                            name="email"
                            type="email"
                            placeholder="Please Enter Your Email"
                            value={userLoginInformation.email}
                            onChange={handleUserLoginInformationChange}
                            required
                        />
                    </fieldset>
                    <fieldset className="login-form-password-container">
                        <label htmlFor="login-form-password-input" className="login-form-password-input">Password</label>
                        <input
                            id="userPassword"
                            name="password"
                            type="password"
                            placeholder="Please Enter Your Password"
                            value={userLoginInformation.password}
                            onChange={handleUserLoginInformationChange}
                            required
                        />
                    </fieldset>

                    <button type="submit">Login</button>

                </form>
                <ul>
                    <li>
                        <NavLink to = "/">Can't Log in?</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/register">Sign Up For an Account</NavLink>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Login;