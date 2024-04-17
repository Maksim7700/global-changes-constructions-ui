import {useTranslation} from 'react-i18next';

const Title = () => {

    const {t} = useTranslation();

    return (
        <div  data-aos='fade-up'  className='title-content'>
            <div className='title'>{t('main.title')}</div>
            <div className='title-logo'><img src="./logo.png" alt="Description" loading="lazy"/></div>
        </div>
    )
}

export default Title;
