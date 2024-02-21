import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/HomePage.css";
import lightLoginLogo from "../assets/icons8-user-light.png";
import blueLoginLogo from "../assets/icons8-user-blue.png";
import stars from "../assets/review-stars.svg";
import heroPhone from "../assets/hero-phone-large.png";

const Home = () => {

    const [scrollTopData, setScrollTopData] = useState('');
    const [scrollLoginLogo, setScrollLoginLogo] = useState(lightLoginLogo);

    useEffect(() => {
        changeHeaderOnScroll();
        
    }, [])


    const changeHeaderOnScroll = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setScrollTopData('');
                setScrollLoginLogo(lightLoginLogo)
            } else {
                setScrollTopData('scrolled');
                setScrollLoginLogo(blueLoginLogo)
            }
        })
    }

    return ( 

        <div className="home-page-wrapper">
            <div className={`home-page-header ${scrollTopData}`}>
                <div className="title-login-wrapper">
                    <h1 className="header-title">myexerciseapp</h1>
                    <NavLink to = "/login" className="header-login-nav-button"><a href="" className="login-logo-a"><img className="login-logo-img" src={scrollLoginLogo} alt="login-logo-button"/></a></NavLink>
                </div>
            </div>
            <div className="home-page-body">
                <section className="home-page-body-slice" id="start-today-slice">
                    <div className="app-advert">
                        <div className="app-advert-text-and-login">
                            <h1 className="app-advert-h1">
                                <span className="no1-exercise-app font-light">#1 exercise tracking app</span>
                                <span className="reach-your-goals font-light">Reach your goals</span> 
                                <span className="with-myexerciseapp font-light">With MyExerciseApp</span>
                            </h1>
                            <p className="advert-tagline font-light">Build healthy habits with the all-in-one food, exercise, and calorie tracker.</p>
                        
                            <NavLink to = "/register" className="navLink-get-started-link">Get Started </NavLink>
        

                        </div>
                        <img className="hero-phone-img" alt="image of a phone displaying the my exercise app" src={heroPhone}></img>


                    </div>

                </section>
                <section className="home-page-body-slice" id="reviews">

                    <div class="slideshow-container">
                        <img className="review-stars-svg" src={stars}></img>

                        <div class="my-slides fade">
                            <div class="review-text">1 / 3</div>
                            <div class="text">Caption Text</div>
                        </div>

                        <div class="my-slides fade">
                            <div class="review-text">2 / 3</div>
                            <div class="text">Caption Two</div>
                        </div>

                        <div class="my-slides fade">
                            <div class="review-text">3 / 3</div>
                            <div class="text">Caption Three</div>
                        </div>


                            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                            <a class="next" onclick="plusSlides(1)">&#10095;</a>

                        
                        
                        <div>
                            <span class="dot" onclick="currentSlide(1)"></span>
                            <span class="dot" onclick="currentSlide(2)"></span>
                            <span class="dot" onclick="currentSlide(3)"></span>
                        </div>
                    </div>



                </section>
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