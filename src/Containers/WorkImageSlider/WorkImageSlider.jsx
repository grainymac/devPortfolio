import React, { useState, useEffect } from 'react'
import './WorkImageSlider.sass'
import 'animate.css'

let counter = 0

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    transform: "scale(1)",
    boxShadow: "none",
};

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "-50px",
    fontSize: "60px",
    color: "#D7514D",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "-50px",
    fontSize: "60px",
    color: "#D7514D",
    zIndex: 1,
    cursor: "pointer",
};

const sliderStyles = {
    position: "relative",
    height: "100%",
    border: "15px solid #D7514D",
    borderRadius: "2rem"
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "100px"
};

const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: "#D7514D",
};

const WorkImageSlider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleHover = () => {
        slideStyles.transform = "scale(1.1)";
        slideStyles.boxShadow = "7px 10px 59px 11px rgba(255, 255, 255, 0.75)";
    }

    const handleHoverOut = () => {
        slideStyles.transform = "scale(1)";
        slideStyles.boxShadow = "none";
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <a href={slides[currentIndex].github} target="_blank" rel="noopener noreferrer">
                <div style={slideStylesWidthBackground} onMouseEnter={handleHover} onMouseLeave={handleHoverOut}></div>
            </a>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (

                    <div key={slideIndex}>
                        <div className='slide-title-container' style={dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                            {/* <h3 className='slide-title animate__animated animate__fadeIn'> {slide.title} </h3> */}
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default WorkImageSlider