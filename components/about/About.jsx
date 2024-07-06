import { useTranslation } from '../../app/i18n';

export default async function About({ lng }) {
    const { t } = await useTranslation(lng, 'about');

    return (
        <section id='about' className='my-16'>
            <h2 className='text-2xl font-bold mb-4'>{t('about')}</h2>
            <p className='font-medium'>{t('paragraph1')}</p>
            <br />
            <p className='font-medium'>{t('paragraph2')}</p>
            <br />
            <p className='font-medium'>{t('paragraph3')}</p>
        </section >
    );
}