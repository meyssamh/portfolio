import { dir } from 'i18next';

import { languages } from '../i18n/settings';
import ThemeProvider from './provider';
import './globals.css';

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }))
};

export const metadata = {
	title: 'Seyed Meyssam Hosseinifard | Web Developer & Junior Java Developer',
	description: "Seyed Meyssam Hosseinifard is a skilled web developer and junior Java developer specializing in Next.js, React, and Java. Explore his portfolio, learn about modern web technologies, and discover high-performance software engineering solutions.",
	keywords: 'Web Developer, Next.js Developer, React Developer, Junior Java Developer, Frontend Engineer, Software Engineer, JavaScript, Java, Portfolio, Meyssam Hosseinifard',
	author: 'Seyed Meyssam Hosseinifard',
	openGraph: {
		title: 'Seyed Meyssam Hosseinifard | Web Developer & Junior Java Developer',
		description: 'Explore the portfolio of Seyed Meyssam Hosseinifard, a skilled Next.js, React developer, and junior Java developer. See my latest projects and contact me for collaboration.',
		url: 'https://meyssamdev.ir',
		siteName: 'Meyssam Hosseinifard Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Meyssam Hosseinifard Portfolio',
			},
		],
		type: 'website',
	}, other: {
		'application/ld+json': JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Seyed Meyssam Hosseinifard",
			"url": "https://meyssamdev.ir",
			"image": "https://meyssamdev.ir/og-image.jpg",
			"jobTitle": "Web Developer & Junior Java Developer",
			"description": "Web developer and junior Java developer specializing in Next.js, React, Java, and modern web technologies.",
			"sameAs": [
				"https://github.com/meyssamh",
				"https://www.linkedin.com/in/seyed-meyssam-h-b97318166",
				"https://x.com/JungeAmadeus?t=s8knmGOJkGRoyK8YBYvckg&s=08"
			],
			"worksFor": {
				"@type": "Organization",
				"name": "Freelance"
			},
			"alumniOf": {
				"@type": "CollegeOrUniversity",
				"name": "Applied Scientific University of Industries of Iran",
				"sameAs": "https://msi-uast.ir"
			}
		})
	},
	twitter: {
		card: 'summary_large_image',
		site: '@JungeAmadeus',
		title: 'Seyed Meyssam Hosseinifard | Web Developer & Junior Java Developer',
		description: 'Discover my projects in Next.js, React, and Java development. Contact me for collaboration!',
		images: ['/og-image.jpg'],
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon-32x32.png',
	},
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