import ServicesComponent from '@/components/Services';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Services' });

    return {
        title: t('title'),
        alternates: {
            canonical: `https://ioannislampropoulos.com/${locale}/services`,
            languages: {
                'en': 'https://ioannislampropoulos.com/en/services',
                'el': 'https://ioannislampropoulos.com/el/services',
                'x-default': 'https://ioannislampropoulos.com/en/services',
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
