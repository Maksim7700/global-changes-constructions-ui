import Container from './default/Container';
import {useTranslation} from 'react-i18next'
import {Link as Scroll} from 'react-scroll';

const Header = () => {

    const {t} = useTranslation();

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div className='main'>
            <Container className='nav'>
                <div className='nav-left'>
                    <div style={{cursor: 'pointer'}} onClick={() => refreshPage()} className='nav-logo'><img src="./global-changes-construction.png" alt="Description" loading="lazy"/></div>
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
                </div>
                <div className='nav-right'>
                    <div><img src="./callback.svg" alt="Description" loading="lazy"/>+448006431967</div>
                    <Scroll to='contactUs' spy={true} smooth={true}>
                    <button>{t('header.contactUs')}</button>
                    </Scroll>
                </div>
            </Container>
        </div>
    );
}

export default Header;
