import ProjectsComponent from '@/components/Projects';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Projects' });

    return {
        title: t('title'),
    };
}

export default function ProjectsPage() {
    return (
        <main>
            <ProjectsComponent />
        </main>
    );
}
