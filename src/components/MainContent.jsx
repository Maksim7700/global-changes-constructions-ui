import SlideComponent from './SlideComponent';
import Title from './Title';
import Container from './default/Container';

const MainContent = () => {
  return (
    <div className='main-content'>
      <Container>
        <Title />
        <SlideComponent />
      </Container>
    </div>
  );
}

export default MainContent;
