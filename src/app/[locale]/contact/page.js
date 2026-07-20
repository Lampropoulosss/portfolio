import ContactComponent from '@/components/Contact';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }, parent) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.contact' });
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
            canonical: `https://ioannislampropoulos.com/${locale}/contact`,
            languages: {
                'en': 'https://ioannislampropoulos.com/en/contact',
                'el': 'https://ioannislampropoulos.com/el/contact',
                'x-default': 'https://ioannislampropoulos.com/en/contact',
            },
        },
    };
}

export default function ContactPage() {
    // Removed duplicate Structured Data for Local SEO (ProfessionalService) as it is now in layout.js
    return (
        <main>
            <ContactComponent />
        </main>
    );
}
