'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes';

const ThemeProvider = ({ children, ...props }) => {
    return (
        <NextThemesProvider
            {...props}
            themes={['light', 'dark']}
        >
            {children}
        </NextThemesProvider>
    );
};

export default ThemeProvider;