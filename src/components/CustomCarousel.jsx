import React, { useState, useEffect, useRef, useCallback } from "react";
import "./custom.slider.css";

const CustomCarousel = ({ children }) => {
  const on = '#282828';
  const size = children.length; // Обчислімо size з кількості слайдів

  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef(null);

  const slideNext = useCallback(() => {
    setActiveIndex(prevIndex => (prevIndex + 1) % children.length);
  }, [children.length]);

  const slidePrev = useCallback(() => {
    setActiveIndex(prevIndex => (prevIndex - 1 + children.length) % children.length);
  }, [children.length]);

  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(slideNext, 8000);
    };

    startAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [slideNext]);

  const handleMouseEnter = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!autoplayRef.current) {
      autoplayRef.current = setInterval(slideNext, 8000);
    }
  }, [slideNext]);

  const Arrows = () => (
    <div className='side-component'>
      <div className='side-switch'>
        <div className='slide-left-arrow' onClick={slidePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
            <path d="M14 2L2 13.5L14 25" stroke={on} strokeWidth="1.5" strokeLinecap="square" />
            <path d="M32 13.5H8" stroke={on} strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </div>
        <div className='switch'>
          <div className='slide-count'>{activeIndex + 1}</div>
          <div className='slide-slash'> /</div>
          <div className='slide-size'>{size}</div>
        </div>
        <div className='slide-right-arrow' onClick={slideNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
            <path d="M19 2L31 13.5L19 25" stroke={on} strokeWidth="1.5" strokeLinecap="square" />
            <path d="M1 13.5H25" stroke={on} strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Arrows />
      <div
        className="container__slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children.map((item, index) => (
          <div
            className={`slider__item slider__item-active-${activeIndex + 1}`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomCarousel;
