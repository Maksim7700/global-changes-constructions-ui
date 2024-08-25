import CustomCarousel from './CustomCarousel';
import images from '../data/data';

const SlideComponent = () => (
    <CustomCarousel>
        {images.map((image) => (
            <img
                key={image.imgURL}
                src={image.imgURL}
                alt={image.imgAlt}
            />
        ))}
    </CustomCarousel>
);

export default SlideComponent;
