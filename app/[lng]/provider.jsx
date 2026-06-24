'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { CookiesProvider } from 'react-cookie';

const ThemeProvider = ({ children, ...props }) => {
    return (
        <NextThemesProvider
            {...props}
            themes={['light', 'dark']}
        >
            <CookiesProvider>
                {children}
            </CookiesProvider>
        </NextThemesProvider>
    );
};

export default ThemeProvider;