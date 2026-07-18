import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/data';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import styles from './ServiceDetail.module.css';

export async function generateMetadata({ params }) {
    const { locale, slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);
    
    if (!service) return {};

    const t = await getTranslations({ locale, namespace: `Services.list.${service.translationKey}` });

    return {
        title: t('title'),
        description: t('description'),
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

    return (
        <main className={styles.container}>
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
