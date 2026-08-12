import Header from '../../../components/header/Header';
import ContactClient from '../../../components/contact/ContactClient';
import Footer from '../../../components/footer/Footer';
import { useTranslation } from '../../i18n';

export default async function ContactPage({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, 'contact');

  return (
    <>
      <Header lng={lng} />
      <main className="container mx-auto px-4 pt-28 pb-20 min-h-screen">
        <ContactClient
          lng={lng}
          contactTitle={t('contact')}
          workText={t('work')}
          togetherText={t('together')}
          formName={t('formName')}
          formEmail={t('formEmail')}
          formMessage={t('formMessage')}
          formSubmit={t('formSubmit')}
          formSending={t('formSending')}
          formSuccess={t('formSuccess')}
          formError={t('formError')}
        />
      </main>
      <Footer lng={lng} />
    </>
  );
}
