import Container from './default/Container';
import {useTranslation} from 'react-i18next';

const WorkProcess = () => {

    const {t} = useTranslation();

    return (
        <div className='workProcess'>
            <Container className='workProcessContainer'>
                <div className='work-process-title'>{t('workProcess.title')}</div>
                <div className='work-process-steps'>
                    <div className='work-process-steps-card'>
                        <div className='work-process-steps-card-step'>{t('workProcess.1.step')}</div>
                        <div className='work-process-steps-card-title'>{t('workProcess.1.title')}</div>
                        <div className='work-process-steps-card-description'>{t('workProcess.1.description')}</div>
                    </div>
                    <div className='work-process-steps-card'>
                        <div className='work-process-steps-card-step'>{t('workProcess.2.step')}</div>
                        <div className='work-process-steps-card-title'>{t('workProcess.2.title')}</div>
                        <div className='work-process-steps-card-description'>{t('workProcess.2.description')}</div>
                    </div>
                    <div className='work-process-steps-card'>
                        <div className='work-process-steps-card-step'>{t('workProcess.3.step')}</div>
                        <div className='work-process-steps-card-title'>{t('workProcess.3.title')}</div>
                        <div className='work-process-steps-card-description'>{t('workProcess.3.description')}</div>
                    </div>
                    <div className='work-process-steps-card'>
                        <div className='work-process-steps-card-step'>{t('workProcess.4.step')}</div>
                        <div className='work-process-steps-card-title'>{t('workProcess.4.title')}</div>
                        <div className='work-process-steps-card-description'>{t('workProcess.4.description')}</div>
                    </div>
                </div>
                <div className='work-process-project-in-action'>
                    <div className='work-process-project-in-action-left-box'>
                        <div className='work-process-project-in-action-left-box-title'>{t('workProcess.action.title')}</div>
                        <div className='work-process-project-in-action-left-box-description'>{t('workProcess.action.description')}</div>
                        <div className='work-process-project-in-action-left-box-monitoring'>
                            <div className='work-process-project-in-action-left-box-monitoring-title'>{t('workProcess.monitoring.title')}</div>
                            <div className='work-process-project-in-action-left-box-monitoring-description'>{t('workProcess.monitoring.description')}</div>
                        </div>
                    </div>
                    <div className='work-process-project-in-action-video'>
                        <iframe width="1175" height="661" src="https://www.youtube.com/embed/jhak5jvO-ro" title="OTBx Air - Construction Promo" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default WorkProcess;
