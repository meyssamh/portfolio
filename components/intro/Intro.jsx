import { useTranslation } from '../../app/i18n';
import IntroClient from './IntroClient';

export default async function Intro({ lng }) {
    const { t } = await useTranslation(lng, 'intro');

    return (
        <IntroClient
            greeting={t('greeting')}
            name={t('name')}
            introduction={t('introduction')}
            location={t('location')}
        />
    );
}