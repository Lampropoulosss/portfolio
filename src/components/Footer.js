import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    © {currentYear} Ioannis Lampropoulos. All rights reserved.
                </div>
                <div className={styles.socials}>
                    <a href="mailto:ioannis.lampropoulos05@gmail.com" className={styles.socialLink}>
                        Email
                    </a>
                    <a href="https://github.com/Lampropoulosss" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
