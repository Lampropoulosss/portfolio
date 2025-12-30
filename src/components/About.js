import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About Me</h2>

                <div className={styles.grid}>
                    <div className={styles.textSection}>
                        <h3>Profile</h3>
                        <p>
                            I am a passionate Software Engineer currently advancing my expertise in Information and Electronic Systems Engineering at the International Hellenic University.
                            With a coding background that began at age 16, I combine academic rigor with a hands-on approach to modern web development.
                        </p>
                        <p>
                            I am driven by curiosity to learn and commitment to quality. I stay ahead of the curve by continuously adapting to the latest tech trends
                            and thrive in environments that challenge me to solve complex problems. Fluent in Greek and English.
                        </p>

                        <h3>Core Competencies & Interests</h3>
                        <ul className={styles.assetsList}>
                            <li>Continuous Learner</li>
                            <li>Collaborative Spirit</li>
                            <li>Problem Solving</li>
                            <li>Professional Communication</li>
                            <li>Music & Piano</li>
                        </ul>
                    </div>

                    <div className={styles.textSection}>
                        <h3>Education</h3>

                        <div className={styles.eduItem}>
                            <h4>Information and Electronic Systems Engineering</h4>
                            <span>International Hellenic University (2023 - Present)</span>
                            <p>Pursuing Degree</p>
                        </div>

                        <div className={styles.eduItem}>
                            <h4>3rd General High School of Kalamaria</h4>
                            <span>2020 - 2023</span>
                            <p>Graduated with Distinction</p>
                        </div>

                        <h3>Personal Details</h3>
                        <p style={{ marginBottom: 0 }}><strong>Location:</strong> Thessaloniki, Greece</p>
                        <p style={{ marginBottom: 0 }}><strong>Availability:</strong> Open to work / Freelance</p>
                    </div>
                </div>
            </div>
        </section>
    );
}