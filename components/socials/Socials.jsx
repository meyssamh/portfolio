"use client"

import { useTranslation } from '../../app/i18n/client';
import data from '../../data/portfolio.json';

export default function Socials({ lng }) {
    const { t } = useTranslation(lng, 'socials');

    return (
        <div className={'flex flex-wrap link'}>
            {data.socials.map((social, index) => (
                <button
                    className='hover:bg-slate-100 hover:scale-105 rounded-md px-3 py-2 text-sm font-medium'
                    key={index}
                    onClick={() => window.open(social.link)}
                >
                    {t(social.title)}
                </button>
            ))}
        </div>
    );
};