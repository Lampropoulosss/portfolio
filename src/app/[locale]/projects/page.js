import ProjectsComponent from '@/components/Projects';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Projects' });

    return {
        title: t('title'),
        alternates: {
            canonical: `/${locale}/projects`,
            languages: {
                'en': '/en/projects',
                'el': '/el/projects',
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
