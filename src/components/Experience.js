import styles from './Experience.module.css';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Experience() {
    const t = useTranslations('Experience');
    const tHero = useTranslations('Hero');

    const renderJob = (key) => (
        <div className={styles.item}>
            <h3 className={styles.role}>
                {t(`${key}.role`)} <span className={styles.company}>{t(`${key}.company`)}</span>
                <span className={styles.period}>{t(`${key}.period`)}</span>
            </h3>
            <div className={styles.description}>
                <ul>
                    {t.raw(`${key}.description`).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>{t('title')}</h2>

                <div className={styles.timeline}>
                    {/* Current Role */}
                    {renderJob('jobs.0')}

                    {/* Robinrich */}
                    {renderJob('jobs.1')}

                    {/* Personal Venture */}
                    {renderJob('jobs.2')}

                    {/* Early Experience */}
                    {renderJob('jobs.3')}
                </div>

                <div className="ctaButtons">
                    <Link href="/projects" className="btn-primary">
                        {tHero('checkWork')}
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                        {tHero('contactMe')}
                    </Link>
                </div>
            </div>
        </section>
    );
}