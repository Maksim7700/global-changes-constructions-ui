import React, { memo } from 'react';
import Container from './default/Container';
import { useTranslation } from 'react-i18next';

// Use React.memo to avoid unnecessary re-renders if props do not change
const AboutUs = memo(() => {
    const { t } = useTranslation();

    return (
        <div id='aboutUs' className='aboutUs'>
            <Container>
                <div className='about-us-title'>{t('aboutUs.title')}</div>
                <div className='page-container'>
                    <div className='page'>
                        <div className='page-image'>
                            <img src="./page1.png" alt={t('aboutUs.page1.title')} loading="lazy" />
                        </div>
                        <div className='page-box'>
                            <div>{t('aboutUs.page1.title')}</div>
                            <div>{t('aboutUs.page1.text')}</div>
                        </div>
                    </div>
                    <div className='page rev'>
                        <div className='page-box'>
                            <div>{t('aboutUs.page2.title')}</div>
                            <div>{t('aboutUs.page2.text')}</div>
                        </div>
                        <div className='page-image'>
                            <img src="./page2.png" alt={t('aboutUs.page2.title')} loading="lazy" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
});

export default AboutUs;
