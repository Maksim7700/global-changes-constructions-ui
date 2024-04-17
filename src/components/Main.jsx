import { useEffect } from 'react';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import MainContent from './MainContent';
import Statistic from './Statistic';
import WorkProcess from './WorkProcess';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {


    useEffect(() => {
        AOS.init();
    },[])

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
