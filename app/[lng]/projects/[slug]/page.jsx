import { notFound } from 'next/navigation';

import Header from '../../../../components/header/Header';
import Footer from '../../../../components/footer/Footer';
import { useTranslation } from '../../../i18n';
import CaseStudyClient from './CaseStudyClient';

const projectsData = {
  'box-pwa': {
    slug: 'box-pwa',
    type: 'box',
    liveUrl: 'https://box-pwa.example.com',
    githubFrontend: 'https://github.com/yourusername/box-pwa',
    githubBackend: null,
  },
  'classroom-system': {
    slug: 'classroom-system',
    type: 'classroom',
    liveUrl: 'https://classroom.example.com',
    githubFrontend: 'https://github.com/yourusername/classroom-nextjs',
    githubBackend: 'https://github.com/yourusername/classroom-spring',
  },
};

export async function generateStaticParams() {
  return [
    { lng: 'en', slug: 'box-pwa' },
    { lng: 'en', slug: 'classroom-system' },
    { lng: 'de', slug: 'box-pwa' },
    { lng: 'de', slug: 'classroom-system' },
    { lng: 'fa', slug: 'box-pwa' },
    { lng: 'fa', slug: 'classroom-system' },
  ];
}

export default async function CaseStudyPage({ params }) {
  const { lng, slug } = await params;
  const { t } = await useTranslation(lng, 'case-study');

  const validProjects = ['box-pwa', 'classroom-system', 'silicon-box', 'spring-classroom'];

  if (!validProjects.includes(slug)) {
    notFound();
  }

  const project = projectsData[slug];
  if (!project) notFound();

  const translatedContent = {
    backToProjects: t('backToProjects'),
    overview: t('overview'),
    challenge: t('challenge'),
    solution: t('solution'),
    architecture: t('architecture'),
    metrics: t('metrics'),
    codeSnippet: t('codeSnippet'),
    technologies: t('technologies'),
    liveDemo: t('liveDemo'),
    viewCode: t('viewCode'),
    box: {
      title: t('boxTitle'),
      subtitle: t('boxSubtitle'),
      challenge: t('boxChallenge'),
      solution: t('boxSolution'),
      architecture: t('boxArchitecture'),
      metrics: [
        { value: t('boxMetrics1'), label: 'Offline Capability' },
        { value: t('boxMetrics2'), label: 'Performance' },
        { value: t('boxMetrics3'), label: 'User Base' },
      ],
      codeTitle: t('boxCodeTitle'),
      codeDescription: t('boxCodeDescription'),
    },
    classroom: {
      title: t('classroomTitle'),
      subtitle: t('classroomSubtitle'),
      challenge: t('classroomChallenge'),
      solution: t('classroomSolution'),
      architecture: t('classroomArchitecture'),
      metrics: [
        { value: t('classroomMetrics1'), label: 'Concurrent Users' },
        { value: t('classroomMetrics2'), label: 'Reliability' },
        { value: t('classroomMetrics3'), label: 'Efficiency Gain' },
      ],
      codeTitle: t('classroomCodeTitle'),
      codeDescription: t('classroomCodeDescription'),
    },
  };

  return (
    <>
      <Header lng={lng} />
      <main className="container mx-auto px-4 pt-28 pb-20 min-h-screen">
        <CaseStudyClient lng={lng} slug={slug} project={project} content={translatedContent} />
      </main>
      <Footer lng={lng} />
    </>
  );
}
