import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../styles/HomePage.css";
import lightLoginLogo from "../assets/icons8-user-light.png";
import blueLoginLogo from "../assets/icons8-user-blue.png";
import stars from "../assets/review-stars.svg";
import heroPhone from "../assets/hero-phone-large.png";
import "../styles/Carousel.css"
import Carousel from "../components/Carousel";

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