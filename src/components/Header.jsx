import Container from './default/Container';
import { useTranslation } from 'react-i18next';
import { Link as Scroll } from 'react-scroll';

const Header = () => {
    const { t } = useTranslation();

    const refreshPage = () => {
        window.location.reload(false);
    };

    return (
        <div className='main'>
            <Container className='nav'>
                <div className='nav-left'>
                    <div 
                        className='nav-logo' 
                        onClick={refreshPage}
                    >
                        <img 
                            src="./global-changes-construction.png" 
                            alt={t('header.logoAlt')} 
                            loading="lazy"
                        />
                    </div>
                    <div className='nav-items'>
                        <a href='/'>{t('header.home')}</a>
                        <Scroll to='aboutUs' spy={true} smooth={true}>
                            {t('header.aboutUs')}
                        </Scroll>
                        <Scroll to='workProcess' spy={true} smooth={true}>
                            {t('header.workProcess')}
                        </Scroll>
                        <Scroll to='contactUs' spy={true} smooth={true}>
                            {t('header.contactUs')}
                        </Scroll>
                    </div>
                </div>
                <div className='nav-right'>
                    <div className='phone-mobile'>
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M20 7V17C20 21 19 22 15 22H9C5 22 4 21 4 17V7C4 3 5 2 9 2H15C19 2 20 3 20 7Z" 
                                stroke="#282828" 
                                strokeWidth="1.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                            <path 
                                d="M14 5.5H10" 
                                stroke="#282828" 
                                strokeWidth="1.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                            <path 
                                d="M12 19.1C12.8561 19.1 13.55 18.406 13.55 17.55C13.55 16.694 12.8561 16 12 16C11.144 16 10.45 16.694 10.45 17.55C10.45 18.406 11.144 19.1 12 19.1Z" 
                                stroke="#282828" 
                                strokeWidth="1.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                        +448006431967
                    </div>
                    <Scroll to='contactUs' spy={true} smooth={true}>
                        <button>{t('header.contactUs')}</button>
                    </Scroll>
                </div>
            </Container>
        </div>
    );
}

export default Header;
