import Container from './default/Container';
import { useTranslation } from 'react-i18next';
import { Link as Scroll } from 'react-scroll';

const StatisticItem = ({ value, text }) => (
    <div>
        <div className='stats-value'>{value}</div>
        <div className='stats-text'>{text}</div>
    </div>
);

const Statistic = () => {
    const { t } = useTranslation();

    const statsData = [
        { value: t('stats.stats.one.value'), text: t('stats.stats.one.text') },
        { value: t('stats.stats.two.value'), text: t('stats.stats.two.text') },
        { value: t('stats.stats.three.value'), text: t('stats.stats.three.text') },
        { value: t('stats.stats.four.value'), text: t('stats.stats.four.text') },
        { value: t('stats.stats.five.value'), text: t('stats.stats.five.text') },
    ];

    return (
        <div className='statistic'>
            <Container>
                <div className='about-us-container'>
                    <div className='contact-us'>
                        <div className='about-us-text'>{t('stats.aboutUs')}</div>
                        <Scroll to='contactUs' spy={true} smooth={true}>
                            <button>{t('stats.button')}</button>
                        </Scroll>
                    </div>
                    <div className='stats'>
                        {statsData.map((stat, index) => (
                            <StatisticItem key={index} {...stat} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Statistic;
