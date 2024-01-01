import Container from './default/Container';
import { useTranslation } from 'react-i18next'

const Header = () => {

  const { t } = useTranslation()

  return (
    <div className='main'>
      <Container className='nav'>
        <div className='nav-left'>
          <div className='nav-logo'><img src="./global-changes-construction.png" alt="Description" loading="lazy" /></div>
          <div className='nav-items'>
            <a href='/'>{t('header.home')}</a>
            <a href='/'>{t('header.aboutUs')}</a>
            <a href='/'>{t('header.workProcess')}</a>
            <a href='/'>{t('header.contactUs')}</a>
          </div>
        </div>
        <div className='nav-right'>
          <div><img src="./callback.svg" alt="Description" loading="lazy" />+448006431967  </div>
          <button>{t('header.contactUs')}</button>

          </div>
      </Container>
    </div>
  );
}

export default Header;
