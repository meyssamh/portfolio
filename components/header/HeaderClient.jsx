'use client';

import Link from 'next/link';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { languages } from '../../app/i18n/settings';
import Switcher from '../switcher/Switcher';

export default function HeaderClient({ lng, firstname, projects, about, uses, resume, contact }) {
  const languageButtons = languages
    .filter((l) => lng !== l)
    .map((l) => {
      return (
        <MenuItem key={l} className="hover:bg-zinc-100 dark:hover:bg-white/10 rounded-lg">
          {() => (
            <Link
              href={`/${l}`}
              className="font-medium block px-4 py-2 text-sm hover:text-[var(--accent-color)] transition-colors duration-200"
            >
              {l === 'en' ? 'English' : l === 'de' ? 'Deutsch' : 'فارسی'}
            </Link>
          )}
        </MenuItem>
      );
    });

  const navigation = [
    { name: projects, href: `/${lng}/projects` },
    { name: about, href: `/${lng}/about` },
    { name: uses, href: `/${lng}/uses` },
    { name: resume, href: `/${lng}/resume` },
    { name: contact, href: `/${lng}/contact` },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="bg-[var(--card-color)] backdrop-blur-md border border-[var(--card-border)] rounded-full px-4 sm:px-6 py-3 shadow-lg transition-colors duration-300">
              <div className="relative flex items-center justify-between">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-white/10 focus:outline-none focus:ring-0 transition-[background-color] duration-200">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>

                {/* Clickable Logo / Name */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link href={`/${lng}`} className="group flex flex-shrink-0 items-center">
                    <span className="font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                      {firstname}
                    </span>
                  </Link>
                </div>

                {/* Right side links */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                  <div className="hidden sm:block">
                    <div className="flex space-x-1 items-center">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-[var(--accent-color)] rounded-full px-3 py-2 text-sm font-medium transition-[background-color] duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Switcher lng={lng} />
                    </div>
                  </div>

                  {/* Language dropdown */}
                  <Menu as="div" className="relative ml-2">
                    <div>
                      <MenuButton className="group relative flex text-sm p-1 m-1 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-full focus:outline-0 focus:ring-0 transition-[background-color] duration-200 cursor-pointer">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open language menu</span>
                        <LanguageIcon
                          className="block h-5 w-5 text-[var(--text-color)] group-hover:text-[var(--accent-color)]"
                          aria-hidden="true"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      anchor={'bottom end'}
                      transition
                      className="absolute z-[60] mt-2 w-32 origin-top-right rounded-xl bg-[var(--card-color)] py-1 shadow-xl border border-[var(--card-border)] transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {languageButtons}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
            </div>

            {/* Mobile Menu Panel */}
            <DisclosurePanel className="sm:hidden mt-2 bg-[var(--card-color)] backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[var(--card-border)] transition-colors duration-300">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className="hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-[var(--accent-color)] block rounded-xl px-3 py-2 text-base font-medium transition-[background-color] duration-200"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                <section className="px-3 pt-2">
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
