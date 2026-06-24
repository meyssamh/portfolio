import { useTranslation } from '../../app/i18n';
import ProjectsClient from './ProjectsClient';
import data from '../../data/portfolio.json';

export default async function Projects({ lng }) {
    const { t } = await useTranslation(lng, 'projects');

    // 1. Translate everything on the Server!
    const translatedProjects = data.projects.map(project => ({
        ...project,
        title: t(project.title),
        description: t(project.description),
        caution: project.caution ? t(project.caution) : '',
        websiteText: t('website'),
        frontendText: t('frontend'),
        backendText: t('backend'),
        sourceText: t('source')
    }));

    return (
        <ProjectsClient 
            projectsTitle={t('projects')}
            projectData={translatedProjects}
            hintText={t('hint')} // Pass the hint string directly
            lng={lng}
        />
    );
}