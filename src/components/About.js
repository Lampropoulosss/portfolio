import styles from './About.module.css';
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>{t('title')}</h2>

                <div className={styles.grid}>
                    <div className={styles.textSection}>
                        <h3>{t('profile')}</h3>
                        <p>{t('profileText1')}</p>
                        <p>{t('profileText2')}</p>

                        <h3>{t('competencies')}</h3>
                        <ul className={styles.assetsList}>
                            <li>{t('competenciesList.learner')}</li>
                            <li>{t('competenciesList.collaborative')}</li>
                            <li>{t('competenciesList.problemSolving')}</li>
                            <li>{t('competenciesList.communication')}</li>
                            <li>{t('competenciesList.music')}</li>
                        </ul>
                    </div>

                    <div className={styles.textSection}>
                        <h3>{t('education')}</h3>

                        <div className={styles.eduItem}>
                            <h4>{t('edu1.title')}</h4>
                            <span>{t('edu1.school')}</span>
                            <p>{t('edu1.status')}</p>
                        </div>

                        <div className={styles.eduItem}>
                            <h4>{t('edu2.title')}</h4>
                            <span>{t('edu2.school')}</span>
                            <p>{t('edu2.status')}</p>
                        </div>

                        <h3>{t('personal')}</h3>
                        <p style={{ marginBottom: 0 }}><strong>{t('locationLabel')}</strong> {t('locationValue')}</p>
                        <p style={{ marginBottom: 0 }}><strong>{t('availabilityLabel')}</strong> {t('availabilityValue')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}