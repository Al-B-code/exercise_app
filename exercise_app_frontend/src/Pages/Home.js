import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../styles/HomePage.css";
import lightLoginLogo from "../assets/icons8-user-light.png";
import blueLoginLogo from "../assets/icons8-user-blue.png";
import stars from "../assets/review-stars.svg";
import heroPhone from "../assets/hero-phone-large.png";
import "../styles/Carousel.css"
import Carousel from "../components/Carousel";

import trackFood from "../assets/track-food-large.webp"
import learnWhatWorks from "../assets/learn-what-works-large.webp"
import changeYourHabits from "../assets/change-your-habits-large.webp"

const Home = () => {

    const [scrollTopData, setScrollTopData] = useState('');
    const [scrollLoginLogo, setScrollLoginLogo] = useState(lightLoginLogo);
    // const [slideIndex, setSlideIndex] = useState(1);

    const reviews = [
       {name: "John M", content: "\"Friendly, easy-to-use app that keeps me accountable.\""},
       {name: "Sarah L", content: "\"Can't lose weight and stay on track without it.\""},
       {name: "Dinah K", content: "\"Helped me get moving on my goals and tracking my weight loss and bodybuilding.\""}
    ]

    const renderSlide = (review) => (
        <div className="review-container"> <p className="review-content">{review.content}</p> <p className="review-name"><strong>{review.name}.</strong></p></div>
    );


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
                        <img className="review-stars-svg" src={stars}></img>
                        <h2 className="review-h2">3.7 Million 5-Star Reviews</h2>

                        <Carousel slides={reviews} renderSlide={renderSlide}/>

                </section>
                <section className="home-page-body-slice" id="hit-health-goals-slice">
                    <h2 className="hit-health-goals-title">Hit your health goals in 1-2-3</h2>
                    <div className="how-it-works-container">
                        <div className="step-1-container">
                            <div className="step-1-image-container">
                                <img className="track-food-img" alt="image showing food tracking in the app" src={trackFood}></img>
                            </div>
                            <div className="step-1-word-container">
                                <p className="how-it-works-number">1</p>
                                <p className="how-it-works-step-title">Track food, fitness & fasting</p>
                                <p className="how-it-works-step-content-text">Tracking calories and macros is easy with our barcode scanner and device integration</p>
                            </div>
                        </div>
                        <div className="step-2-container">
                            <div className="step-2-image-container">
                                <img className="daily-tracking-img" alt="image showing daily tracking in the app" src={learnWhatWorks}></img>    
                            </div>
                            <div className="step-2-word-container">
                                <p className="how-it-works-number">2</p>
                                <p className="how-it-works-step-title">Learn what works</p>
                                <p className="how-it-works-step-content-text">Personalised nutrition insights reveal what's working to you can make smarter choices.</p>
                            </div>
                        </div>
                        <div className="step-3-container">
                            <div className="step-3-image-container">
                                <img className="track-food-img" alt="image showing daily tracking in the app" src={changeYourHabits}></img>    
                            </div>
                            <div className="step-3-word-container">
                                <p className="how-it-works-number">3</p>
                                <p className="how-it-works-step-title">Change your habits and reach your goals</p>
                                <p className="how-it-works-step-content-text">Now you have the tools and knowledge to build healthy habits for life.</p>
                            </div>

                        </div>

                    </div>

                </section>
                <section className="home-page-body-slice" id="food-calorie-tracker">
                    <h2>If it's edible, it's in here</h2>
                    <p>Food tracking app with 18 million global foods</p>
                    {/* Link below to a search page connected to the api with food? */}
                    {/* <NavLink to = "/register" className="navLink-get-started-link">Get Started </NavLink> */}

                </section>


            </div>
            <div className="home-page-footer">

            </div>
            
        </div>

     );
}
 
export default Home;