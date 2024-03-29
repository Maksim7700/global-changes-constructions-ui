import Container from './default/Container';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {

  const { t } = useTranslation();
  return (
    <div className='aboutUs'>
      <Container>
        <div className='about-us-title'>{t('aboutUs.title')}</div>
        <div className='page-containter'>
          <div className='page'>
            <div className='page1'><img src="./page1.png" alt="Description" loading="lazy" /></div>
            <div className='page-box'>
              <div>{t('aboutUs.page1.title')}</div>
              <div>{t('aboutUs.page1.text')}</div>
            </div>
          </div>
          <div className='page'>
            <div className='page-box'>
              <div>{t('aboutUs.page2.title')}</div>
              <div>{t('aboutUs.page2.text')}</div>
            </div>
            <div className='page2'>
             <img src="./page2.png" alt="Description" loading="lazy" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
