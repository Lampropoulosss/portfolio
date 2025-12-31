'use client';

import styles from './Footer.module.css';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    {t('rights', { year: currentYear })}
                </div>

                <div className={styles.socials}>
                    <a href="mailto:contact@ioannislampropoulos.com" className={styles.socialLink}>
                        {t('email')}
                    </a>
                    <a href="https://github.com/Lampropoulosss" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        {t('github')}
                    </a>

                    {/* Scroll to Top Button */}
                    <button onClick={scrollToTop} className={styles.scrollBtn}>
                        &uarr; {t('top')}
                    </button>
                </div>
            </div>
        </footer>
    );
}