import { useTranslation } from '../../app/i18n';
import AboutClient from './AboutClient';

export default async function About({ lng }) {
    const { t } = await useTranslation(lng, 'about');

    return (
        <AboutClient 
            aboutTitle={t('about')}
            paragraphs={[t('paragraph1'), t('paragraph2'), t('paragraph3')]}
            lng={lng}
        />
    );
}