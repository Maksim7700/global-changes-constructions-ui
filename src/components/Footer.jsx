import React, { useCallback } from 'react';
import Container from './default/Container';
import { useTranslation } from 'react-i18next';
import { Link as Scroll } from 'react-scroll';

const Footer = () => {
    const { t } = useTranslation();

    const refreshPage = useCallback(() => {
        window.location.reload(false);
    }, []);

    return (
        <>
            <hr color='#d9d9d9' />

            <div className='footer'>
                <Container>
                    <div className='footer-nav'>
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={refreshPage}
                            className='nav-logo-footer'
                        >
                            <img
                                src="./global-changes-construction.png"
                                alt="Description"
                                loading="lazy"
                            />
                        </div>
                        <div className='nav-items footer-nav-items'>
                            <a href='/' target='_blank' rel="noreferrer">
                                {t('header.home')}
                            </a>
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
                        <div className='info'>
                            <div className='terms-block'>
                                <div>
                                    <a href='/' target='_blank' rel="noreferrer">
                                        {t('footer.privacyPolicy')}
                                    </a>
                                </div>
                                <div>
                                    <a href='/' target='_blank' rel="noreferrer">
                                        {t('footer.termsOfUse')}
                                    </a>
                                </div>
                            </div>
                            <div className='develop-by'>
                                <div>Design & Development:</div>
                                <a href='https://bigshare-ua.com' target='_blank' rel="noreferrer">
                                    <img
                                        src="./bigshare.svg"
                                        alt="Description"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;
