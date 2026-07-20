import ServicesComponent from '@/components/Services';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }, parent) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.services' });
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
