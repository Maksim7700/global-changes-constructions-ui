import { useTranslation } from 'react-i18next';

const Title = () => {
    const { t } = useTranslation();

    return (
        <div className='title-content'>
            <div className='title-row title'>
                {t('main.title')} 
                <img src="./logo.png" alt="Description" loading="lazy" />
            </div>
            <div className='title'>{t('main.title2')}</div>
        </div>
    );
}

export default Title;
