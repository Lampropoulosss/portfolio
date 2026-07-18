import AboutComponent from '@/components/About';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'About' });

    return {
        title: t('title'),
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
