'use client';

import styles from './Footer.module.css';

export default function Footer() {
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
                    © {currentYear} Ioannis Lampropoulos. All rights reserved.
                </div>

                <div className={styles.socials}>
                    <a href="mailto:contact@ioannislampropoulos.com" className={styles.socialLink}>
                        Email
                    </a>
                    <a href="https://github.com/Lampropoulosss" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        GitHub
                    </a>

                    {/* Scroll to Top Button */}
                    <button onClick={scrollToTop} className={styles.scrollBtn}>
                        &uarr; Top
                    </button>
                </div>
            </div>
        </footer>
    );
}