import SlideComponent from './SlideComponent';
import Title from './Title';
import Container from './default/Container';

const MainContent = () => {
    return (
        <div className='main-content'>
            <a href=" " className="btn-whatsapp-pulse">
                <img src='./whatsapp.svg' alt='WhatsApp'/>
            </a>

            <Container>
                <Title/>
                <SlideComponent/>
            </Container>
        </div>
    );
}

export default MainContent;
