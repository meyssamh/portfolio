import { useTranslation } from '../../app/i18n';
import ContactClient from './ContactClient';

export default async function Contact({ lng }) {
  const { t } = await useTranslation(lng, 'contact');

  return (
    <ContactClient
      contactTitle={t('contact')}
      workText={t('work')}
      togetherText={t('together')}
      lng={lng}
    />
  );
}
