import { useTranslation } from '../../app/i18n';

export default async function Footer({ lng }) {
    const { t } = await useTranslation(lng, 'footer');

    return (
        <footer className='bg-transparent p-4'>
            <p className='text-sm text-center select-none font-medium'>
                {t('text')}
            </p>
        </footer>
    );
}