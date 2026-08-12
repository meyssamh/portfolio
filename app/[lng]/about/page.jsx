import Header from '../../../components/header/Header';
import AboutClient from './AboutClient';
import Footer from '../../../components/footer/Footer';
import { useTranslation } from '../../i18n';

export default async function AboutPage({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, 'about');

  return (
    <>
      <Header lng={lng} />
      <main className="container mx-auto px-4 pt-28 pb-20 min-h-screen">
        <AboutClient
          lng={lng}
          aboutTitle={t('about')}
          paragraph1={t('paragraph1')}
          paragraph2={t('paragraph2')}
          paragraph3={t('paragraph3')}
          timelineTitle={t('timelineTitle')}
          item1={{
            year: t('item1_year'),
            role: t('item1_role'),
            company: t('item1_company'),
            desc: t('item1_desc'),
          }}
          item2={{
            year: t('item2_year'),
            role: t('item2_role'),
            company: t('item2_company'),
            desc: t('item2_desc'),
          }}
          skillsTitle={t('skillsTitle')}
          expertLevel={t('expertLevel')}
          proficientLevel={t('proficientLevel')}
          familiarLevel={t('familiarLevel')}
          educationTitle={t('educationTitle')}
          university={t('university')}
          degree={t('degree')}
          years={t('years')}
          languagesTitle={t('languagesTitle')}
          certificationsTitle={t('certificationsTitle')}
          testimonialTitle={t('testimonialTitle')}
          testimonialText={t('testimonialText')}
          testimonialAuthor={t('testimonialAuthor')}
          testimonialRole={t('testimonialRole')}

          langPersian={t('langPersian')}
          langGerman={t('langGerman')}
          langEnglish={t('langEnglish')}
          levelNative={t('levelNative')}
          levelC1={t('levelC1')}
          levelProfessional={t('levelProfessional')}
        />
      </main>
      <Footer lng={lng} />
    </>
  );
}
