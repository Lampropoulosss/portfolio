import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo} scroll={false}>
                Ioannis Lampropoulos
            </Link>

            <ul className={styles.navLinks}>
                <li><a href="#about" className={styles.navLink}>About</a></li>
                <li><a href="#experience" className={styles.navLink}>Experience</a></li>
                <li><a href="#projects" className={styles.navLink}>Projects</a></li>
                <li><a href="#contact" className={styles.contactBtn}>Contact Me</a></li>
            </ul>
        </nav>
    );
}