import Container from './default/Container';
import { useTranslation } from 'react-i18next';

const Form = () => {

  const { t } = useTranslation();

  return (
    <div className='form'>
      <Container>
        <div className='form-container'>
        <div className='form-left'>
          <div className='form-left-title'>{t('form.title')}</div>
          <div className='form-left-description'>{t('form.description')}</div>
          <div className='form-left-social'>
            <div className='form-left-social-facebook'><img src="./_Facebook.png" alt="Description" loading="lazy" /></div>
            <div className='form-left-social-linkedin'><img src="./_Linkedin.png" alt="Description" loading="lazy" /></div>
            <div className='form-left-social-instagram'><img src="./instagram.png" alt="Description" loading="lazy" /></div>
          </div>
        </div>
        <div>
    <form action="#" method="post">
        <div className="first-form-group">
            <input className='first-name' type="text" id="first-name" placeholder='Full name*' name="first_name" required />
            <input className='email' type="email" id="email" name="email" required placeholder='Email address*' />
        </div>

        <div className="description-group">
            <textarea placeholder='How can we help you? *' className='form-description' id="description" name="description" rows="4" required></textarea>
        </div>

        <div className="form-group-checkbox">
          <input type="checkbox" id="checkbox" name="rules" required />
            <label htmlFor="checkbox">{t('form.form.checkbox')}</label>
        </div>
        <div className='button-submit'>
        <button type="submit">Submit</button>
        </div>
    </form>
</div></div>
      </Container>
    </div>
  )
}

export default Form;
