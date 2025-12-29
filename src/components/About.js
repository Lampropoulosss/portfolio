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
                            I am a student at the Department of Information and Electronic Systems Engineering of the International Hellenic University.
                            I have an excellent knowledge of Greek and English (B2). I constantly follow the latest developments in technology and IT.
                        </p>
                        <p>
                            I have been involved in programming since the age of 16 and I am eager to gain new knowledge and respond quickly to demands with respect.
                        </p>

                        <h3>Key Assets & Interests</h3>
                        <ul className={styles.assetsList}>
                            <li>Eager to learn</li>
                            <li>Teamwork</li>
                            <li>Professionalism</li>
                            <li>Politeness</li>
                            <li>Music & Piano</li>
                        </ul>
                    </div>

                    <div className={styles.textSection}>
                        <h3>Education</h3>

                        <div className={styles.eduItem}>
                            <h4>Information and Electronic Systems Engineering</h4>
                            <span>International Hellenic University (2023 - Present)</span>
                            <p>Student</p>
                        </div>

                        <div className={styles.eduItem}>
                            <h4>3rd General High School of Kalamaria</h4>
                            <span>2020 - 2023</span>
                            <p>Graduated with "EXCELLENT" 18.4</p>
                        </div>

                        <h3>Personal Details</h3>
                        <p style={{ marginBottom: 0 }}><strong>Location:</strong> Thessaloniki, Greece</p>
                        <p style={{ marginBottom: 0 }}><strong>DOB:</strong> 05/01/2005</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
