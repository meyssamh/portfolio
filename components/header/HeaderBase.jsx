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
            <MenuItem key={l} className='hover:bg-slate-200/50 dark:hover:bg-slate-900/50' >
                {() => (
                    <Link
                        href={`/${l}`}
                        className={'bg-slate-100/0 dark:bg-slate-800/0 font-medium block px-4 py-2 text-sm'}
                    >
                        {l === 'en' ? 'English' : l === 'de' ? 'Deutsch' : 'فارسی'}
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
        <Disclosure as='nav' className={'bg-transparent'}>
            {({ open }) => (
                <>
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex h-16 items-center justify-between'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                {/* Mobile menu button*/}
                                <DisclosureButton className='relative inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 focus:outline-none focus:ring-0'>
                                    <span className='absolute -inset-0.5' />
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                                    ) : (
                                        <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                                <div className='flex flex-shrink-0 items-center'>
                                    <div className='flex space-x-4 sm:hidden'>
                                        {t('firstname')}
                                    </div>
                                </div>
                                <div className='hidden sm:block'>
                                    <div className='flex space-x-4'>
                                        {t('firstname')}
                                    </div>
                                </div>
                            </div>
                            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0'>

                                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                                    <div className='hidden sm:block'>
                                        <div className='flex space-x-4 items-center'>
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={'hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:scale-105 rounded-md px-3 py-2 text-sm font-medium'}
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
                                <Menu as='div' className='relative ml-3'>
                                    <div>
                                        <MenuButton className='relative flex text-sm p-1 m-1 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:scale-105 rounded-md focus:outline-0 focus:ring-0'>
                                            <span className='absolute -inset-1.5' />
                                            <span className='sr-only'>Open language menu</span>
                                            <LanguageIcon className='block h-6 w-6' aria-hidden='true' />
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        anchor={'bottom end'}
                                        transition
                                        className='absolute z-10 mt-2 w-28 origin-top-right rounded-md bg-slate-100/50 dark:bg-slate-800/50 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
                                    >
                                        {languageButtons}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className='sm:hidden'>
                        <div className='space-y-1 px-2 pb-3 pt-2'>
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as='a'
                                    href={item.href}
                                    className={'hover:bg-slate-100/50 dark:hover:bg-slate-800/50 block rounded-md px-3 py-2 text-base font-medium'}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                            <section className={'px-3'} >
                                <Switcher lng={lng} />
                            </section>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
