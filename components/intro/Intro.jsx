import { useTranslation } from '../../app/i18n';

export default async function Intro({ lng }) {
    const { t } = await useTranslation(lng, 'intro');

    return (
        <section id='intro' className='my-16'>
            <h1 className='text-6xl font-medium mb-4'>
                {t('greeting')}
            </h1>
            <h1 className='text-6xl font-medium mb-4'>
                {t('name')}
            </h1>
            <h1 className='text-6xl font-medium mb-4'>
                {t('introduction')}
            </h1>
            <h1 className='text-6xl font-medium mb-4'>
                {t('location')}
            </h1>
            <p className='font-medium'>
                {t('hint')}
            </p>
        </section >
    );
}