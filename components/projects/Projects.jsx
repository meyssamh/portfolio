import { useTranslation } from '../../app/i18n';
import data from '../../data/portfolio.json';

export default async function Projects({ lng }) {
    const { t } = await useTranslation(lng, 'projects');

    return (
        <section id='projects' className='my-16'>
            <h2 className='text-2xl font-bold mb-4'>
                {t('projects')}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {data.projects.map((project, index) => (
                    <div key={index} className='bg-slate-100 p-4 rounded'>
                        <h3 className='text-xl font-bold'>
                            {t(project.title)}
                        </h3>
                        <br />
                        <p className='font-medium'>
                            {t(project.description)}
                        </p>
                        {
                            project.website.length > 0 ?
                                <>
                                    <br />
                                    <a
                                        href={project.website}
                                        className={'bg-slate-200 hover:bg-slate-300 rounded-md px-3 py-2 text-sm font-medium'}
                                    >
                                        {t('website')}
                                    </a>
                                    <br />
                                </> :
                                <></>
                        }
                        {
                            project.sourcecode.available === true ?
                                project.sourcecode.frontend.length > 0 ?
                                    <>
                                        <br />
                                        <a
                                            href={project.sourcecode.frontend}
                                            className={'bg-slate-200 hover:bg-slate-300 rounded-md px-3 py-2 text-sm font-medium'}
                                        >
                                            {t('frontend')}
                                        </a>
                                        <br />
                                    </> :
                                    <></> :
                                <></>
                        }
                        {
                            project.sourcecode.available === true ?
                                project.sourcecode.backend.length > 0 ?
                                    <>
                                        <br />
                                        <a
                                            href={project.sourcecode.backend}
                                            className={'bg-slate-200 hover:bg-slate-300 rounded-md px-3 py-2 text-sm font-medium'}
                                        >
                                            {t('backend')}
                                        </a>
                                        <br />
                                    </> :
                                    <></> :
                                <></>
                        }
                        {
                            project.sourcecode.available === true ?
                                project.sourcecode.source.length > 0 ?
                                    <>
                                        <br />
                                        <a
                                            href={project.sourcecode.source}
                                            className={'bg-slate-200 hover:bg-slate-300 rounded-md px-3 py-2 text-sm font-medium'}
                                        >
                                            {t('source')}
                                        </a>
                                        <br />
                                    </> :
                                    <></> :
                                <></>
                        }
                        {
                            project.caution.length > 0 ?
                                <>
                                    <br />
                                    <p className='font-medium mt-3 text-rose-400'>
                                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6 inline'>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z' />
                                        </svg>
                                        &nbsp;{t(project.caution)}
                                    </p>
                                </> :
                                <></>
                        }
                    </div>
                ))}
            </div>
            <br />
            <p className='font-medium text-rose-400'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6 inline'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z' />
                </svg>
                &nbsp;{t('hint')}
            </p>
        </section >
    );
}
