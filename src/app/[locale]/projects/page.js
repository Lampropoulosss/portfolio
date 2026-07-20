import ProjectsComponent from '@/components/Projects';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }, parent) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.projects' });
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
            canonical: `https://ioannislampropoulos.com/${locale}/projects`,
            languages: {
                'en': 'https://ioannislampropoulos.com/en/projects',
                'el': 'https://ioannislampropoulos.com/el/projects',
                'x-default': 'https://ioannislampropoulos.com/en/projects',
            },
        },
    };
}

export default function ProjectsPage() {
    return (
        <main>
            <ProjectsComponent />
        </main>
    );
}
