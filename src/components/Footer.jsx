import Container from './default/Container';
import {useTranslation} from 'react-i18next'

const Footer = () => {

    const {t} = useTranslation()

    return (
        <>
            <hr></hr>

            <div className='footer'>
                <Container>
                    <div className='footer-nav'>
                        <div className='nav-logo-footer'><img src="./global-changes-construction.png" alt="Description" loading="lazy"/></div>
                        <div className='nav-items'>
                            <a href='/'>{t('footer.home')}</a>
                            <a href='/'>{t('footer.aboutUs')}</a>
                            <a href='/'>{t('footer.workProcess')}</a>
                            <a href='/'>{t('footer.contactUs')}</a>
                        </div>
                        <div className='info'>
                            <div className='terms-block'>
                                <div><a href='/'>{t('footer.privacyPolicy')}</a></div>
                                <div><a href='/'>{t('footer.termsOfUse')}</a></div>
                            </div>
                            <div className='develop-by'>Develop by: <img src="./bigshare.png" alt="Description" loading="lazy"/> BigShare</div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer;
