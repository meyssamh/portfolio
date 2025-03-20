'use client'

import { useTranslation } from '../../app/i18n/client';
import data from '../../data/portfolio.json';

export default function Socials({ lng }) {
    const { t } = useTranslation(lng, 'socials');

    return (
        <div className={'flex flex-wrap link'}>
            {data.socials.map((social, index) => {
                if (lng === "fa" && social.title === "xing") {
                    return;
                } else if(lng !== "fa" && (social.title === "jobvision" || social.title === "jobinja")) {
                    return;
                } else {
                    return (
                        <button
                            className='hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:scale-105 rounded-md px-3 py-2 text-sm font-medium'
                            key={index}
                            onClick={() => window.open(
                                lng === "fa" ?
                                    social.title === "linkedin" ?
                                        "jobvision.ir/cv/85055210-100651" :
                                        social.title === "xing" ?
                                            "https://jobinja.ir/user/ER-7154239" :
                                            social.link :
                                    social.link
                            )}
                        >
                            {t(social.title)}
                        </button>
                    );
                }
            }
            )}
        </div>
    );
}