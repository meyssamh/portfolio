import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import ThemeProvider from './provider';
import './globals.css';

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }))
};

export const metadata = {
	title: 'Meyssam',
	description: 'Portfolio website of Seyed Meyssam Hosseinifard',
};

export default function RootLayout({
	children,
	params: {
		lng
	}
}) {
	return (
		<html lang={lng} dir={dir(lng)} suppressHydrationWarning={true}>
			<head>
				<link rel='shortcut icon' href='../../favicon.ico' />
			</head>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};