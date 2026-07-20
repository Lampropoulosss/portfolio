import AboutComponent from '@/components/About';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }, parent) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.about' });
    const parentMetadata = await parent;

    return {
        title: t('title'),
        description: t('description'),
        openGraph: {
            ...parentMetadata.openGraph,
            title: t('title'),
            description: t('description'),
        },
        twitter: {
            ...parentMetadata.twitter,
            title: t('title'),
            description: t('description'),
        },
        alternates: {
            canonical: `https://ioannislampropoulos.com/${locale}/about`,
            languages: {
                'en': 'https://ioannislampropoulos.com/en/about',
                'el': 'https://ioannislampropoulos.com/el/about',
                'x-default': 'https://ioannislampropoulos.com/en/about',
            },
        },
    };
}

export default function AboutPage() {
    return (
        <main>
            <AboutComponent />
        </main>
    );
}
