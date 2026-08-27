import { notFound } from 'next/navigation';
import Header from '../../../components/header/Header';
import Projects from '../../../components/projects/Projects';
import Footer from '../../../components/footer/Footer';
import { useTranslation } from '../../i18n';

export default async function ProjectsPage({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, 'projects');

  return (
    <>
      <Header lng={lng} />
      <main className="container mx-auto px-4 pt-28 pb-20 min-h-screen">
        <Projects
          lng={lng}
          projectsTitle={t('projects')}

          boxTitle={t('boxTitle')}
          boxDescription={t('boxDescription')}
          boxCaution={t('boxCaution')}

          classroomTitle={t('classroomTitle')}
          classroomDescription={t('classroomDescription')}

          siliconTitle={t('siliconTitle')}
          siliconDescription={t('siliconDescription')}

          springClassroomTitle={t('springClassroomTitle')}
          springClassroomDescription={t('springClassroomDescription')}

          website={t('website')}
          frontend={t('frontend')}
          backend={t('backend')}
          hint={t('hint')}
          caseStudyText={t('caseStudy')}
        />
      </main>
      <Footer lng={lng} />
    </>
  );
}
