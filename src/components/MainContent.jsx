import SlideComponent from './SlideComponent';
import Title from './Title';
import Container from './default/Container';

const MainContent = () => (
    <div className='main-content'>
        <a href="https://wa.me/" className="btn-whatsapp-pulse" aria-label="WhatsApp">
            <img height={35} width={35} src='./whatsapp.svg' alt='WhatsApp' />
        </a>
        <Container className='main-container'>
            <Title />
            <SlideComponent />
        </Container>
    </div>
);

export default MainContent;
