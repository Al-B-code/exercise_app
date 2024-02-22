import { useEffect, useState } from "react";
import "../styles/Carousel.css"

const Carousel = ({slides, renderSlide, interval = 8000 }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    
    const nextSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    }

    const handleDotClick = (index) => {
        setActiveIndex(index);
    }

    const transitionToSlide = (nextIndex) => {
        setTransitioning(true);
        setTimeout(() => {
            setActiveIndex(nextIndex);
            setTransitioning(false);
        }, 500); // transition time.
    };

    // const resetSlidePosition = () => {
    //     // Reset slide position to the first slide when reaching the last slide
    //     if (activeIndex === slides.length - 1) {
    //         setActiveIndex(0);
    //     }

    useEffect(() => {

        const autoPlayInterval = setInterval(nextSlide, interval);
        return () => {
            clearInterval(autoPlayInterval);
        }

    }, [activeIndex, interval, slides.length])



    const createDotComponents = () => {
        return slides.map((slide, index) => (
            <span key={index} className={`dot ${index === activeIndex ? 'active' : ''}`} onClick={() => handleDotClick(index)}></span>
        ));
    };




    return (
        <div className="carousel">
            {/* <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                &lt;
            </button> */}
            <div className="slide-content">
                {renderSlide(slides[activeIndex])}
            </div>
            <div className="dots-container">
                    {createDotComponents(slides)}
            </div>
            {/* <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                &gt;
            </button> */}
        </div> 
     );
}
 
export default Carousel;