import ExperienceComponent from '@/components/Experience';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }, parent) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.experience' });
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
            canonical: `https://ioannislampropoulos.com/${locale}/experience`,
            languages: {
                'en': 'https://ioannislampropoulos.com/en/experience',
                'el': 'https://ioannislampropoulos.com/el/experience',
                'x-default': 'https://ioannislampropoulos.com/en/experience',
            },
        },
    };
}

export default function ExperiencePage() {
    return (
        <main>
            <ExperienceComponent />
        </main>
    );
}
