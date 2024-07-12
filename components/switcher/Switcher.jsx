'use client'

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Switcher({ lng }) {
    const [enabled, setEnabled] = useState(false);
    const { theme, setTheme } = useTheme('light');

    useEffect(() => {
        const isLightThemeSelected = localStorage.getItem('theme') === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches);

        if (isLightThemeSelected) {
            setEnabled(false);
            setTheme('light');
        } else {
            setEnabled(true);
            setTheme('dark');
        }
    }, [setTheme]);

    const toggleTheme = () => {
        setEnabled(!enabled);
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const lightMode = <SunIcon className='h-4 w-4' />;
    const darkMode = <MoonIcon className='h-3 w-3' />;

    return (
        <Switch
            checked={enabled}
            onChange={toggleTheme}
            className='group relative flex h-7 w-14 cursor-pointer rounded-full bg-slate-100/50 dark:bg-slate-900/50 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-slate-100/50 dark:data-[focus]:outline-slate-900 data-[checked]:bg-slate-100/50 dark:data-[checked]:bg-slate-900/50'
        >
            <span
                aria-hidden='true'
                className='absolute flex items-center w-full size-5'
            >
                <span className={`block ${lng === 'fa' ? 'mr-0.5' : 'ml-0.5'}`}>{lightMode}</span>
                <span className={`block ${lng === 'fa' ? 'mr-3.5' : 'ml-3.5'}`}>{darkMode}</span>
            </span>
            <span
                aria-hidden='true'
                className={`pointer-events-none flex items-center justify-center size-5 ${lng === 'fa' ? '-translate-x-0' : 'translate-x-0'} rounded-full bg-slate-50  ring-0 shadow-lg transition duration-200 ease-in-out ${lng === 'fa' ? 'group-data-[checked]:-translate-x-7' : 'group-data-[checked]:translate-x-7'}`}
            >
                <span className='block group-data-[checked]:hidden text-yellow-600'>{lightMode}</span>
                <span className='hidden group-data-[checked]:block text-blue-800'>{darkMode}</span>
            </span>
        </Switch>
    )
}
