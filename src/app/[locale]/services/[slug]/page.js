import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/data';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import styles from './ServiceDetail.module.css';

export async function generateMetadata({ params }, parent) {
    const { locale, slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);
    
    if (!service) return {};

    const t = await getTranslations({ locale, namespace: `Services.list.${service.translationKey}` });
    const parentMetadata = await parent;

    const fullTitle = `${t('title')} | Ioannis Lampropoulos`;
    const seoDesc = t('seoDescription');

    return {
        title: { absolute: fullTitle },
        description: seoDesc,
        openGraph: {
            ...parentMetadata.openGraph,
            title: fullTitle,
            description: seoDesc,
        },
        twitter: {
            ...parentMetadata.twitter,
            title: fullTitle,
            description: seoDesc,
        },
        alternates: {
            canonical: `https://ioannislampropoulos.com/${locale}/services/${slug}`,
            languages: {
                'en': `https://ioannislampropoulos.com/en/services/${slug}`,
                'el': `https://ioannislampropoulos.com/el/services/${slug}`,
                'x-default': `https://ioannislampropoulos.com/en/services/${slug}`,
            },
        },
    };
}

export default async function ServicePage({ params }) {
    const { locale, slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const t = await getTranslations({ locale, namespace: `Services.list.${service.translationKey}` });
    const tCommon = await getTranslations({ locale, namespace: 'Services' });
    const tHero = await getTranslations({ locale, namespace: 'Hero' });

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": locale === 'el' ? "Αρχική" : "Home",
                "item": `https://ioannislampropoulos.com/${locale}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": locale === 'el' ? "Υπηρεσίες" : "Services",
                "item": `https://ioannislampropoulos.com/${locale}/services`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": t('title')
            }
        ]
    };

    return (
        <main className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.description}>{t('description')}</p>
            
            <div className={styles.meta}>
                {t('startingAt')}
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{tCommon('theChallenge')}</h2>
                <p className={styles.text}>{t('theChallenge')}</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{tCommon('technologiesUsed')}</h2>
                <div className={styles.tags}>
                    {t('technologiesUsed').split(',').map((tech, index) => (
                        <span key={index} className={styles.tag}>{tech.trim()}</span>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{tCommon('outcomeValue')}</h2>
                <p className={styles.text}>{t('outcomeValue')}</p>
            </div>

            <div className="ctaButtons">
                <Link href="/projects" className="btn-primary">
                    {tHero('checkWork')}
                </Link>
                <Link href="/contact" className="btn-secondary">
                    {tHero('contactMe')}
                </Link>
            </div>
        </main>
    );
}
