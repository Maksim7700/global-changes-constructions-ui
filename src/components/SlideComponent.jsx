import CustomCarousel from './CustomCarousel';
import images from '../data/data';

const SlideComponent = () => {

    return (
        <>
            <CustomCarousel>
                {images.map((image, index) => {
                    return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                })}
            </CustomCarousel></>
    )
}

export default SlideComponent;
