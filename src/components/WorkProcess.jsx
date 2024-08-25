import Container from './default/Container';
import { useTranslation } from 'react-i18next';

const WorkProcess = () => {
    const { t } = useTranslation();

    const steps = [
        { step: '1'},
        { step: '2'},
        { step: '3'},
        { step: '4'}
    ];

    return (
        <div id='workProcess' className='workProcess'>
            <Container className='workProcessContainer'>
                <div className='work-process-title'>{t('workProcess.title')}</div>
                <div className='work-process-steps'>
                    {steps.map(({ step }) => (
                        <div key={step} className='work-process-steps-card'>
                            <div className='work-process-steps-card-step'>{t(`workProcess.${step}.step`)}</div>
                            <div className='work-process-steps-card-title'>{t(`workProcess.${step}.title`)}</div>
                            <div className='work-process-steps-card-description'>{t(`workProcess.${step}.description`)}</div>
                        </div>
                    ))}
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
                        <div>VIDEO</div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default WorkProcess;
