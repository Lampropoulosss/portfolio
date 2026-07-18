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
                <li><Link href="/about" className={styles.navLink}>{t('about')}</Link></li>
                <li><Link href="/experience" className={styles.navLink}>{t('experience')}</Link></li>
                <li><Link href="/projects" className={styles.navLink}>{t('projects')}</Link></li>
                <li><Link href="/services" className={styles.navLink}>{t('services')}</Link></li>
                <li><Link href="/contact" className={styles.contactBtn}>{t('contact')}</Link></li>
            </ul>
        </nav>
    );
}