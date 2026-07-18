import styles from './Hero.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={`fade-in ${styles.content}`}>
                    <span className={styles.greeting}>{t('greeting')}</span>
                    <h1 className={styles.name}>
                        {t('firstName')} <br />
                        <span>{t('lastName')}</span>
                    </h1>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.description}>
                        {t.rich('description', {
                            br: () => <br />
                        })}
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="/projects" className={styles.primaryBtn}>{t('checkWork')}</Link>
                        <Link href="/contact" className={styles.secondaryBtn}>{t('contactMe')}</Link>
                    </div>
                </div>
                <div className={`fade-in ${styles.imageContainer}`}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/profile_picture.jpg"
                            alt="Ioannis Lampropoulos"
                            width={400}
                            height={400}
                            className={styles.profileImg}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
