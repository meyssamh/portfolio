import { useTranslation } from '../../app/i18n';

export default async function Intro({ lng }) {
    const { t } = await useTranslation(lng, 'intro');

    return (
        <section id='intro' className='my-16'>
            <h1 className='text-6xl font-medium leading-tight'>
                {t('greeting')}
                <br />
                {t('name')}
                <br />
                {t('introduction')}
                <br />
                {t('location')}
            </h1>
        </section >
    );
}