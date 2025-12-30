import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={`fade-in ${styles.content}`}>
                    <span className={styles.greeting}>Hi, I'm</span>
                    <h1 className={styles.name}>
                        Ioannis <br />
                        <span>Lampropoulos</span>
                    </h1>
                    <h2 className={styles.title}>Software Engineer</h2>
                    <p className={styles.description}>
                        Transforming ideas into polished software. A Software Engineer dedicated to building accessible, high-performance web applications.
                        Based in Thessaloniki, Greece.
                    </p>
                    <div className={styles.ctaButtons}>
                        <a href="#projects" className={styles.primaryBtn}>Check my work</a>
                        <a href="#contact" className={styles.secondaryBtn}>Contact me</a>
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
