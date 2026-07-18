import ProjectsComponent from '@/components/Projects';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Projects' });

    return {
        title: t('title'),
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
