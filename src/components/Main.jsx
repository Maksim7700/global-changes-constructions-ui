import AboutUs from './AboutUs';
import Footer from './Footer';
import Form from './Form';
import MainContent from './MainContent';
import Statistic from './Statistic';
import WorkProcess from './WorkProcess';

const components = [
    MainContent,
    Statistic,
    AboutUs,
    WorkProcess,
    Form,
    Footer,
];

const Main = () => (
    <>
        {components.map((Component, index) => (
            <Component key={index} />
        ))}
    </>
);

export default Main;
