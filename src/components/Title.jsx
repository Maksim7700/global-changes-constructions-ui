import {useTranslation} from 'react-i18next';

const Title = () => {

    const {t} = useTranslation();

    return (
        <div className='title-content'>
            <div className='title'>{t('main.title')}</div>
            <div className='title-logo'><img src="./logo.svg" alt="Description" loading="lazy"/></div>
        </div>
    )
}

export default Title;
