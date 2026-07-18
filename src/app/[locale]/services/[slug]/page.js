import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/data';
import { getTranslations } from 'next-intl/server';
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

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.description}>{t('description')}</p>
            
            <div className={styles.meta}>
                {t('startingAt')}
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>The Challenge</h2>
                <p className={styles.text}>{t('problem')}</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Technologies Used</h2>
                <p className={styles.text}>{t('stack')}</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Outcome & Value</h2>
                <p className={styles.text}>{t('outcome')}</p>
            </div>
        </main>
    );
}
