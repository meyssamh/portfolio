import Header from '../../../components/header/Header';
import UsesClient from './UsesClient';
import Footer from '../../../components/footer/Footer';
import { useTranslation } from '../../i18n';

export default async function UsesPage({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, 'uses');

  return (
    <>
      <Header lng={lng} />
      <main className="container mx-auto px-4 pt-28 pb-20 min-h-screen">
        <UsesClient
          lng={lng}
          title={t('title')}
          subtitle={t('subtitle')}
          hardwareTitle={t('hardware')}
          softwareTitle={t('software')}
          workspaceTitle={t('workspace')}
          hardware={[
            { label: 'Laptop', value: t('laptop') },
            { label: 'Monitor', value: t('monitor') },
            { label: 'Keyboard', value: t('keyboard') },
            { label: 'Mouse', value: t('mouse') },
            { label: 'Headphones', value: t('headphones') },
          ]}
          software={[
            { label: 'Editor', value: t('editor') },
            { label: 'Terminal', value: t('terminal') },
            { label: 'Browser', value: t('browser') },
            { label: 'Version Control', value: t('versionControl') },
            { label: 'OS', value: t('os') },
          ]}
          workspace={[
            { label: 'Desk', value: t('desk') },
            { label: 'Chair', value: t('chair') },
            { label: 'Coffee', value: t('coffee') },
            { label: 'Music', value: t('music') },
          ]}
        />
      </main>
      <Footer lng={lng} />
    </>
  );
}
