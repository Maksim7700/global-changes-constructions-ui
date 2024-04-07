import AboutUs from './AboutUs';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import MainContent from './MainContent';
import Statistic from './Statistic';
import WorkProcess from './WorkProcess';

const Main = () => {
    return (
        <>
            <Header/>
            <MainContent/>
            <Statistic/>
            <AboutUs/>
            <WorkProcess/>
            <Form/>
            <Footer/>
        </>
    )
}

export default Main;
