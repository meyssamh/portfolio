import { useTranslation } from '../../app/i18n';
import Socials from '../socials/Socials';

export default async function Contact({ lng }) {
    const { t } = await useTranslation(lng, 'contact');

    return (
        <section id='contact' className='my-16 p-2'>
            <div>
                <h2 className='text-2xl font-bold mb-4'>
                    {t('contact')}
                </h2>
                <div className='mt-10'>
                    <h1 className='text-5xl font-bold'>
                        {t('work')}
                    </h1>
                    <h1 className='text-5xl font-bold w-72'>
                        {t('together')}
                    </h1>
                    <div className='mt-10'>
                        <Socials lng={lng} />
                    </div>
                </div>
            </div>
        </section>
    );
}
