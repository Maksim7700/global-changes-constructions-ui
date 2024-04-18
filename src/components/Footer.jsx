import Container from './default/Container';
import {useTranslation} from 'react-i18next'
import {Link as Scroll} from 'react-scroll';

const Footer = () => {

    const {t} = useTranslation()

    return (
        <>
            <hr color='#d9d9d9'></hr>

            <div className='footer'>
                <Container>
                    <div className='footer-nav'>
                        <div className='nav-logo-footer'><img src="./global-changes-construction.png" alt="Description" loading="lazy"/></div>
                        <div className='nav-items'>
                        <a href='/'>{t('header.home')}</a>
                        <Scroll to='aboutUs' spy={true} smooth={true}>
                        <a href='/'>{t('header.aboutUs')}</a>
                        </Scroll>
                        <Scroll to='workProcess' spy={true} smooth={true}>
                        <a href='/'>{t('header.workProcess')}</a>
                        </Scroll>
                        <Scroll to='contactUs' spy={true} smooth={true}>
                        <a href='/'>{t('header.contactUs')}</a>
                        </Scroll>
                        </div>
                        <div className='info'>
                            <div className='terms-block'>
                                <div><a href='/'>{t('footer.privacyPolicy')}</a></div>
                                <div><a href='/'>{t('footer.termsOfUse')}</a></div>
                            </div>
                            <div className='develop-by'><div>Develop by:</div> <img src="./bigshare.svg" alt="Description" loading="lazy"/></div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer;
