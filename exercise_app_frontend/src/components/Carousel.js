import { useEffect, useState } from "react";
import "../styles/Carousel.css"

const Carousel = ({slides, renderSlide, interval = 3000 }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    
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

    useEffect(() => {

        const autoPlayInterval = setInterval(nextSlide, interval);
        return () => {
            clearInterval(autoPlayInterval);
        }
    }, [interval])



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
                <div className="dots-container">
                    {createDotComponents(slides)}
                </div>
            </div>
            {/* <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                &gt;
            </button> */}
        </div> 
     );
}
 
export default Carousel;