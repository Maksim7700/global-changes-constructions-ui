import React, { useState, useEffect } from "react";

import "./custom.slider.css";

function CustomCarousel({ children }) {

  const on = '#282828';
  const size = 3

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 8000)
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideDone]);

  const slideNext = () => {

    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });

  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  const arrows = () => {
    return (
      <div className='side-component' data-aos='fade-up'>
            <div className='side-switch'>
                <button className='slide-left-arrow' onClick={() => slidePrev()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                        <path d="M14 2L2 13.5L14 25" stroke={on} strokeWidth="1.5" strokeLinecap="square" />
                        <path d="M32 13.5H8" stroke={on} strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                </button>
                <div className='switch'>
                    <div className='slide-count'>{activeIndex + 1}</div>
                    <div className='slide-slash'> /</div>
                    <div className='slide-size'>{size}</div>
                </div>
                <button className='slide-right-arrow' onClick={() => slideNext()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                        <path d="M19 2L31 13.5L19 25" stroke={on} strokeWidth="1.5" strokeLinecap="square" />
                        <path d="M1 13.5H25" stroke={on} strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                </button>
            </div>
        </div>
    )
  }

  return (
    <>
    {arrows()}
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default CustomCarousel;
