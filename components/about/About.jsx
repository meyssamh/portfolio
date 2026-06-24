import { useTranslation } from '../../app/i18n';

export default async function About({ lng }) {
    const { t } = await useTranslation(lng, 'about');

    return (
        <section id='about' className='my-16'>
            <p className='font-medium leading-relaxed' style={{ color: 'var(--text-muted)' }}>
                {t('paragraph1')}
            </p>
            <br />
            <p className='font-medium leading-relaxed' style={{ color: 'var(--text-muted)' }}>
                {t('paragraph2')}
            </p>
            <br />
            <p className='font-medium leading-relaxed' style={{ color: 'var(--text-muted)' }}>
                {t('paragraph3')}
            </p>
        </section >
    );
}