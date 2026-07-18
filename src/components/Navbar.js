'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const nextLocale = locale === 'en' ? 'el' : 'en';
    const nextLabel = locale === 'en' ? 'EL' : 'EN';

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    Ioannis Lampropoulos
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/about" className={styles.navLink}>{t('about')}</Link></li>
                        <li><Link href="/experience" className={styles.navLink}>{t('experience')}</Link></li>
                        <li><Link href="/projects" className={styles.navLink}>{t('projects')}</Link></li>
                        <li><Link href="/services" className={styles.navLink}>{t('services')}</Link></li>
                    </ul>

                    <div className={styles.actions}>
                        <Link href={pathname} locale={nextLocale} className={styles.langToggle} aria-label="Toggle language">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.langIcon}>
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            {nextLabel}
                        </Link>
                        <Link href="/contact" className={styles.contactBtn}>{t('contact')}</Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <ul className={styles.mobileNavLinks}>
                    <li><Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>{t('about')}</Link></li>
                    <li><Link href="/experience" className={styles.mobileNavLink} onClick={closeMenu}>{t('experience')}</Link></li>
                    <li><Link href="/projects" className={styles.mobileNavLink} onClick={closeMenu}>{t('projects')}</Link></li>
                    <li><Link href="/services" className={styles.mobileNavLink} onClick={closeMenu}>{t('services')}</Link></li>
                    <li>
                        <Link href={pathname} locale={nextLocale} className={styles.mobileLangToggle} onClick={closeMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            {locale === 'en' ? 'Ελληνικά' : 'English'}
                        </Link>
                    </li>
                    <li><Link href="/contact" className={styles.mobileContactBtn} onClick={closeMenu}>{t('contact')}</Link></li>
                </ul>
            </div>
        </nav>
    );
}