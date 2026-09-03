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
          item3={{
            year: t('item3_year'),
            role: t('item3_role'),
            company: t('item3_company'),
            desc: t('item3_desc'),
          }}
          item4={{
            year: t('item4_year'),
            role: t('item4_role'),
            company: t('item4_company'),
            desc: t('item4_desc'),
          }}
          item5={{
            year: t('item5_year'),
            role: t('item5_role'),
            company: t('item5_company'),
            desc: t('item5_desc'),
          }}
          item6={{
            year: t('item6_year'),
            role: t('item6_role'),
            company: t('item6_company'),
            desc: t('item6_desc'),
          }}
          item7={{
            year: t('item7_year'),
            role: t('item7_role'),
            company: t('item7_company'),
            desc: t('item7_desc'),
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
          langPersian={t('langPersian')}
          langGerman={t('langGerman')}
          langEnglish={t('langEnglish')}
          levelNative={t('levelNative')}
          levelFluent={t('levelFluent')}
          levelProfessional={t('levelProfessional')}
          
          testimonialTitle={t('testimonialTitle')}
          testimonialText={t('testimonialText')}
          testimonialAuthor={t('testimonialAuthor')}
          testimonialRole={t('testimonialRole')}

          certificationsTitle={t('certificationsTitle')}
          certifications={t('certifications', { returnObjects: true })}
          
          interestsTitle={t('interestsTitle')}
          interestsText={t('interestsText')}
        />
      </main>
      <Footer lng={lng} />
    </>
  );
}