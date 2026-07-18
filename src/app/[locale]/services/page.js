import ServicesComponent from '@/components/Services';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Services' });

    return {
        title: t('title'),
        alternates: {
            canonical: `/${locale}/services`,
            languages: {
                'en': '/en/services',
                'el': '/el/services',
            },
        },
    };
}

export default function ServicesPage() {
    return (
        <main>
            <ServicesComponent />
        </main>
    );
}
