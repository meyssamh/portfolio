import { dir } from 'i18next';

import { languages } from '../i18n/settings';
import ThemeProvider from './provider';
import './globals.css';

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }))
};

export const metadata = {
	title: 'Seyed Meyssam Hosseinifard | Web Developer & Junior Java Developer',
	description: 'Web developer and junior Java developer specializing in Next.js, React, Java, and modern web technologies. Explore my projects, blog, and contact me for collaboration.',
	keywords: 'Web Developer, Next.js Developer, React Developer, Junior Java Developer, Frontend Engineer, Software Engineer, JavaScript, Java, Portfolio, Meyssam Hosseinifard',
	author: 'Seyed Meyssam Hosseinifard',
	openGraph: {
		title: 'Seyed Meyssam Hosseinifard | Web Developer & Junior Java Developer',
		description: 'Explore the portfolio of Seyed Meyssam Hosseinifard, a skilled Next.js, React developer, and junior Java developer. See my latest projects and contact me for collaboration.',
		url: 'https://meyssamdev.ir',
		siteName: 'Meyssam Hosseinifard Portfolio',
		images: [
			{
				url: 'https://meyssamdev.ir/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Meyssam Hosseinifard Portfolio',
			},
		],
		type: 'website',
	},
	// twitter: {
	// 	card: 'summary_large_image',
	// 	site: '@yourtwitterhandle',
	// 	title: 'Seyed Meyssam Hosseinifard | Web Developer & Junior Java Developer',
	// 	description: 'Discover my projects in Next.js, React, and Java development. Contact me for collaboration!',
	// 	images: ['https://meyssamdev.ir/og-image.jpg'],
	// },
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