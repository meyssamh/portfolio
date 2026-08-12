import Header from '../../../components/header/Header';
import ResumeClient from './ResumeClient';
import Footer from '../../../components/footer/Footer';
import { useTranslation } from '../../i18n';

export default async function ResumePage({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, 'resume');

  return (
    <>
      <Header lng={lng} />
      <main className="container mx-auto px-4 pt-28 pb-20 min-h-screen">
        <ResumeClient
          lng={lng}
          title={t('title')}
          subtitle={t('subtitle')}
          downloadBtn={t('downloadBtn')}
          printBtn={t('printBtn')}
          statStatusValue={t('statStatusValue')}
          statStatusLabel={t('statStatusLabel')}
          statProjectsValue={t('statProjectsValue')}
          statProjectsLabel={t('statProjectsLabel')}
          statYearsValue={t('statYearsValue')}
          statYearsLabel={t('statYearsLabel')}
        />
      </main>
      <Footer lng={lng} />
    </>
  );
}
