import styles from './Navbar.module.css';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Navbar() {
    const t = useTranslations('Navbar');

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo} scroll={false}>
                Ioannis Lampropoulos
            </Link>

            <ul className={styles.navLinks}>
                <li><a href="#about" className={styles.navLink}>{t('about')}</a></li>
                <li><a href="#experience" className={styles.navLink}>{t('experience')}</a></li>
                <li><a href="#projects" className={styles.navLink}>{t('projects')}</a></li>
                <li><a href="#contact" className={styles.contactBtn}>{t('contact')}</a></li>
            </ul>
        </nav>
    );
}