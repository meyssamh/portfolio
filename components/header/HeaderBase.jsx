'use client' // Make sure this is at the top!

import Link from 'next/link';
import {
    Disclosure, DisclosureButton, DisclosurePanel,
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { languages } from '../../app/i18n/settings';
import Switcher from '../switcher/Switcher';

export const HeaderBase = ({ t, lng }) => {
    const languageButtons = languages.filter((l) => lng !== l).map((l, index) => {
        return (
            <MenuItem key={l} className='hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg' >
                {() => (
                    <Link
                        href={`/${l}`}
                        className={'font-medium block px-4 py-2 text-sm'}
                    >
                        {
                            l === 'en' ? 'English' :
                            l === 'de' ? 'Deutsch' :
                            l === 'es' ? 'Español' :
                            l === 'fr' ? 'Français' :
                            'فارسی'
                        }
                    </Link>
                )}
            </MenuItem>
        )
    });

    const navigation = [
        { name: t('projects'), href: '#projects' },
        { name: t('about'), href: '#about' },
        { name: t('contact'), href: '#contact' },
    ];

    return (
        // --- 1. OUTER WRAPPER (Positions the navbar on the screen) ---
        <div className='fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl'>
            <Disclosure as='nav'>
                {({ open }) => (
                    <>
                        {/* --- 2. INNER WRAPPER (The Glass Pill Background) --- */}
                        <div className='bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-full px-4 sm:px-6 py-3 shadow-lg'>
                            <div className='relative flex items-center justify-between'>
                                
                                {/* Mobile menu button */}
                                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                    <DisclosureButton className='relative inline-flex items-center justify-center rounded-full p-2 hover:bg-slate-100/90 dark:hover:bg-slate-800/90 focus:outline-none focus:ring-0'>
                                        <span className='absolute -inset-0.5' />
                                        <span className='sr-only'>Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                                        ) : (
                                            <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                                        )}
                                    </DisclosureButton>
                                </div>

                                {/* Logo / Name */}
                                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                                    <div className='flex flex-shrink-0 items-center'>
                                        <div className='flex space-x-4 sm:hidden font-bold'>
                                            {t('firstname')}
                                        </div>
                                    </div>
                                    <div className='hidden sm:block'>
                                        <div className='flex space-x-4 font-bold'>
                                            {t('firstname')}
                                        </div>
                                    </div>
                                </div>

                                {/* Right side links */}
                                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0'>
                                    <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                                        <div className='hidden sm:block'>
                                            <div className='flex space-x-1 items-center'>
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={'hover:bg-slate-100/90 dark:hover:bg-slate-800/90 hover:scale-105 rounded-full px-3 py-2 text-sm font-medium transition-all'}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                                <Switcher lng={lng} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Profile dropdown */}
                                    <Menu as='div' className='relative ml-2'>
                                        <div>
                                            <MenuButton className='relative flex text-sm p-1 m-1 hover:bg-slate-100/90 dark:hover:bg-slate-800/90 hover:scale-105 rounded-full focus:outline-0 focus:ring-0 transition-all'>
                                                <span className='absolute -inset-1.5' />
                                                <span className='sr-only'>Open language menu</span>
                                                <LanguageIcon className='block h-5 w-5' aria-hidden='true' />
                                            </MenuButton>
                                        </div>
                                        <MenuItems
                                            anchor={'bottom end'}
                                            transition
                                            className='absolute z-10 mt-2 w-28 origin-top-right rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
                                        >
                                            {languageButtons}
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Panel */}
                        <DisclosurePanel className='sm:hidden mt-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-zinc-200/50 dark:border-zinc-800/50'>
                            <div className='space-y-1 px-2 pb-3 pt-2'>
                                {navigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as='a'
                                        href={item.href}
                                        className={'hover:bg-slate-100/90 dark:hover:bg-slate-800/90 block rounded-xl px-3 py-2 text-base font-medium transition-all'}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                                <section className={'px-3 pt-2'} >
                                    <Switcher lng={lng} />
                                </section>
                            </div>
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}