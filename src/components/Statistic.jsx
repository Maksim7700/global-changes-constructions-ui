import Container from './default/Container';
import {useTranslation} from 'react-i18next';
import {Link as Scroll} from 'react-scroll';

const Statistic = () => {

    const {t} = useTranslation();

    return (
        <div className='statistic'>
            <Container>
                <div  className='about-us-container'>
                    <div className='contact-us' data-aos='fade-up' >
                        <div className='about-us-text'>{t('stats.aboutUs')}</div>
                        <Scroll to='contactUs' spy={true} smooth={true}>
                        <button>{t('stats.button')}</button>
                        </Scroll>
                    </div>
                    <div className='stats' data-aos='fade-up' >
                        <div>
                            <div className='stats-value'>{t('stats.stats.one.value')}</div>
                            <div className='stats-text'>{t('stats.stats.one.text')}</div>
                        </div>
                        <div>
                            <div className='stats-value'>{t('stats.stats.two.value')}</div>
                            <div className='stats-text'>{t('stats.stats.two.text')}</div>
                        </div>
                        <div>
                            <div className='stats-value'>{t('stats.stats.three.value')}</div>
                            <div className='stats-text'>{t('stats.stats.three.text')}</div>
                        </div>
                        <div>
                            <div className='stats-value'>{t('stats.stats.four.value')}</div>
                            <div className='stats-text'>{t('stats.stats.four.text')}</div>
                        </div>
                        <div>
                            <div className='stats-value'>{t('stats.stats.five.value')}</div>
                            <div className='stats-text'>{t('stats.stats.five.text')}</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Statistic;
