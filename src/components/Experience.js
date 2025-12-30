import styles from './Experience.module.css';

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Work Experience</h2>

                <div className={styles.timeline}>
                    {/* Current Role */}
                    <div className={styles.item}>
                        <h3 className={styles.role}>
                            Full-Stack Web Developer <span className={styles.company}>@ Celani Software House</span>
                            <span className={styles.period}>Dec 2024 - Present</span>
                        </h3>
                        <div className={styles.description}>
                            <ul>
                                <li>Architecting and building scalable web solutions using .NET (Web API), Razor Pages, React, and Next.js.</li>
                                <li>Orchestrating DevOps workflows and deployments on Debian VPS using Docker, Docker Compose, and Azure.</li>
                                <li>Engineering automated testing suites using Python to ensure code reliability and performance.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Robinrich */}
                    <div className={styles.item}>
                        <h3 className={styles.role}>
                            Full-Stack Web Developer & Maintainer <span className={styles.company}>@ robinrich.gr</span>
                            <span className={styles.period}>Oct 2024 - Dec 2024</span>
                        </h3>
                        <div className={styles.description}>
                            <ul>
                                <li>Expanded platform functionality by developing new features tailored to business requirements.</li>
                                <li>Optimized application performance and resolved critical legacy issues to ensure system stability.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Personal Venture */}
                    <div className={styles.item}>
                        <h3 className={styles.role}>
                            Founder & Lead Developer <span className={styles.company}>@ yt2mp3.tech</span>
                            <span className={styles.period}>Nov 2021 - June 2022</span>
                        </h3>
                        <div className={styles.description}>
                            <ul>
                                <li>Founded and developed a full-stack media conversion platform using the Next.js framework.</li>
                                <li>Owned the entire product lifecycle, from UI/UX design to backend architecture and deployment.</li>
                                <li>Executed SEO strategies and performance optimizations to drive user traffic.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Early Experience */}
                    <div className={styles.item}>
                        <h3 className={styles.role}>
                            Front-End Developer (Volunteer) <span className={styles.company}>@ Chaotic Destiny Hosting</span>
                            <span className={styles.period}>May 2021 - Aug 2021</span>
                        </h3>
                        <div className={styles.description}>
                            <ul>
                                <li>Collaborated with the core team to design and implement responsive UI components using HTML, CSS, and JavaScript.</li>
                                <li>Provided technical support and troubleshooting for hosting clients.</li>
                                <li>Debugged front-end issues and optimized code based on feedback from senior management.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}