import { useTranslation } from '../../app/i18n';
import HeaderClient from './HeaderClient';

export default async function Header({ lng }) {
  const { t } = await useTranslation(lng, 'header');

  return (
    <HeaderClient
      lng={lng}
      firstname={t('firstname')}
      projects={t('projects')}
      about={t('about')}
      uses={t('uses')}
      resume={t('resume')}
      contact={t('contact')}
    />
  );
}
