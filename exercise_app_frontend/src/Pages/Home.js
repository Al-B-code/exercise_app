import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/HomePage.css"
import loginLogo from "../assets/icons8-user-light.png"

const Home = () => {

    const [scrollTopData, setScrollTopData] = useState('');

    useEffect(() => {
        changeHeaderOnScroll();
        
    }, [])


    const changeHeaderOnScroll = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setScrollTopData('');
            } else {
                setScrollTopData('scrolled');
            }
        })
    }

    return ( 

        <div className="home-page-wrapper">
            <div className={`home-page-header ${scrollTopData}`}>
                <h1 className="header-title">myexerciseapp</h1>
                <NavLink to = "/login" className="header-login-nav-button"><a href="" className="login-logo-a"><img className="login-logo-img" src={loginLogo} alt="login-logo-button"/></a></NavLink>
            </div>
            <div className="home-page-body">
                <section className="home-page-body-slice" id="start-today-slice">
                    <p>test</p>

                </section>

            </div>
            <div className="home-page-footer">

            </div>
            
        </div>

     );
}
 
export default Home;