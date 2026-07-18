import ExperienceComponent from '@/components/Experience';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Experience' });

    return {
        title: t('title'),
        alternates: {
            canonical: `/${locale}/experience`,
            languages: {
                'en': '/en/experience',
                'el': '/el/experience',
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
