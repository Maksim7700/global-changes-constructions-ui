import {useEffect, useState} from 'react';

const SlideComponent = () => {
    const on = '#282828';
    const off = '#C5C5C5'
    const size = 3
    const [count, setCount] = useState(1);
    const [leftArrow, setLeftArrow] = useState(off);
    const [rightArrow, setRightArrow] = useState(on);

    const changeArrows = () => {
        switch (count) {
            case 1: {
                setLeftArrow(off);
                setRightArrow(on);
                break;
            }
            case 2: {
                setLeftArrow(on);
                setRightArrow(on);
                break;
            }
            case 3: {
                setLeftArrow(on);
                setRightArrow(off);
                break;
            }
            default:
                break;
        }
    }

    useEffect(() => {
        changeArrows();
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    const decrease = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    }

    const increase = () => {
        if (count < 3) {
            setCount((prev) => prev + 1);
        }
    }

    return (
        <div className='side-component' data-aos='fade-up' >
            <div className='side-switch'>
                <button className='slide-left-arrow' onClick={() => decrease()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                        <path d="M14 2L2 13.5L14 25" stroke={leftArrow} strokeWidth="1.5" strokeLinecap="square"/>
                        <path d="M32 13.5H8" stroke={leftArrow} strokeWidth="1.5" strokeLinecap="square"/>
                    </svg>
                </button>
                <div className='switch'>
                    <div className='slide-count'>{count}</div>
                    <div className='slide-slash'> /</div>
                    <div className='slide-size'>{size}</div>
                </div>
                <button className='slide-right-arrow' onClick={() => increase()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                        <path d="M19 2L31 13.5L19 25" stroke={rightArrow} strokeWidth="1.5" strokeLinecap="square"/>
                        <path d="M1 13.5H25" stroke={rightArrow} strokeWidth="1.5" strokeLinecap="square"/>
                    </svg>
                </button>
            </div>
            <div className='side-image'>
                <img src={`./slide-img-${count}.png`} alt="Description" loading="lazy"/>
            </div>
        </div>
    )
}

export default SlideComponent;
