import styles from './Services.module.css';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { servicesData } from '@/lib/data';

export default function Services({ limit }) {
    const t = useTranslations('Services');
    const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>{t('title')}</h2>
                    <p className={styles.sectionDesc}>{t('description')}</p>
                </div>
                <div className={styles.grid}>
                    {displayedServices.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{t(`list.${service.translationKey}.title`)}</h3>
                                <p className={styles.cardDesc}>{t(`list.${service.translationKey}.description`)}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', gap: '1rem' }}>
                                    <span className={styles.priceTag}>
                                        {t(`list.${service.translationKey}.startingAt`)}
                                    </span>
                                    <Link href={`/services/${service.slug}`} className={styles.priceTag} style={{ background: 'var(--primary)', color: 'var(--background)' }}>
                                        {t('readMore')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {limit && (
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link href="/services" className={styles.priceTag} style={{ background: 'var(--primary)', color: 'var(--background)', display: 'inline-block', fontSize: '1.1rem', padding: '15px 30px' }}>
                            {t('seeAllServices')}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
