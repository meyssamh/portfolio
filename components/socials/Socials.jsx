'use client';

import { useTranslation } from '../../app/i18n/client';
import data from '../../data/portfolio.json';

export default function Socials({ lng }) {
  const { t } = useTranslation(lng, 'socials');

  return (
    <div className={'flex flex-wrap gap-2'}>
      {data.socials.map((social, index) => {
        if (lng === 'fa' && social.title === 'xing') {
          return;
        } else if (lng !== 'fa' && (social.title === 'jobvision' || social.title === 'jobinja')) {
          return;
        } else {
          return (
            <button
              className="hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-[var(--accent-color)] rounded-full px-4 py-2 text-sm font-medium transition-[background-color] duration-200 cursor-pointer"
              key={index}
              onClick={() => window.open(social.link)}
            >
              {t(social.title)}
            </button>
          );
        }
      })}
    </div>
  );
}
