import ContactComponent from '@/components/Contact';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Contact' });

    return {
        title: t('title'),
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
    // Add Structured Data for Local SEO (ProfessionalService)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ioannis Lampropoulos",
        "image": "https://ioannislampropoulos.com/images/profile.jpg",
        "telephone": "+306939379169",
        "description": "Software Engineer based in Thessaloniki, Greece. Specialized in Custom Web Applications, E-Commerce, and Corporate Websites.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kalamaria",
            "addressRegion": "Thessaloniki",
            "addressCountry": "GR"
        },
        "url": "https://ioannislampropoulos.com",
        "sameAs": [
            "https://github.com/Lampropoulosss",
            "https://www.linkedin.com/in/ioannislampropoulos05"
        ],
        "knowsAbout": [
            "Next.js", "React", ".NET", "Python", "Docker", "SEO", "Web Development"
        ]
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContactComponent />
        </main>
    );
}
