import AboutComponent from '@/components/About';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'About' });

    return {
        title: t('title'),
        alternates: {
            canonical: `/${locale}/about`,
            languages: {
                'en': '/en/about',
                'el': '/el/about',
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
