import Container from './default/Container';
import {useTranslation} from 'react-i18next';

const AboutUs = () => {

    const {t} = useTranslation();
    return (
        <div id='aboutUs' className='aboutUs'>
            <Container>
                <div data-aos='fade-up'  className='about-us-title'>{t('aboutUs.title')}</div>
                <div className='page-container'>
                    <div className='page' data-aos='fade-up'>
                        <div className='page1'><img src="./page1.png" alt="Description" loading="lazy"/></div>
                        <div className='page-box'>
                            <div>{t('aboutUs.page1.title')}</div>
                            <div>{t('aboutUs.page1.text')}</div>
                        </div>
                    </div>
                    <div className='page rev'  data-aos='fade-up'>
                        <div className='page-box'>
                            <div>{t('aboutUs.page2.title')}</div>
                            <div>{t('aboutUs.page2.text')}</div>
                        </div>
                        <div className='page2'>
                            <img src="./page2.png" alt="Description" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default AboutUs;
