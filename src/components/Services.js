import styles from './Services.module.css';
import { useTranslations } from 'next-intl';

export default function Services() {
    const t = useTranslations('Services');

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>{t('title')}</h2>
                    <p className={styles.sectionDesc}>{t('description')}</p>
                </div>
                <div className={styles.grid}>
                    {[0, 1, 2, 3].map((index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{t(`list.${index}.title`)}</h3>
                                <p className={styles.cardDesc}>{t(`list.${index}.description`)}</p>
                                <a href="#contact" className={styles.priceTag}>
                                    {t(`list.${index}.startingAt`)}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
