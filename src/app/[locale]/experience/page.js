import ExperienceComponent from '@/components/Experience';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Experience' });

    return {
        title: t('title'),
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
