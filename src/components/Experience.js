import styles from './Experience.module.css';

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Work Experience</h2>

                <div className={styles.timeline}>
                    <div className={styles.item}>
                        <h3 className={styles.role}>
                            Full-Stack Web Developer <span className={styles.company}>@ Celani Software House</span>
                            <span className={styles.period}>Dec 2024 - Present</span>
                        </h3>
                        <div className={styles.description}>
                            <ul>
                                <li>Developed web applications using .NET (Web API, Razor Pages), React, and Next.js.</li>
                                <li>Managed DevOps workflows on Debian VPS using Docker, Docker Compose, and Azure.</li>
                                <li>Implemented automated testing procedures using Python.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <h3 className={styles.role}>
                            Full-Stack Web Developer & Maintainer <span className={styles.company}>@ robinrich.gr</span>
                            <span className={styles.period}>Oct 2024 - Dec 2024</span>
                        </h3>
                        <div className={styles.description}>
                            <ul>
                                <li>Add new features based on owner needs.</li>
                                <li>Correcting issues and maintenance.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <h3 className={styles.role}>
                            Owner & Full-Stack Web Developer <span className={styles.company}>@ yt2mp3.tech</span>
                            <span className={styles.period}>Nov 2021 - June 2022</span>
                        </h3>
                        <div className={styles.description}>
                            <ul>
                                <li>Designed and managed yt2mp3.tech.</li>
                                <li>Implemented Front-End and Back-End using Next.JS Framework.</li>
                                <li>Promoted the website and ensured specification compliance.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <h3 className={styles.role}>
                            Volunteer Front-End Developer <span className={styles.company}>@ Chaotic Destiny Hosting</span>
                            <span className={styles.period}>May 2021 - Aug 2021</span>
                        </h3>
                        <div className={styles.description}>
                            <ul>
                                <li>Solved customer problems and answered questions as Support Agent.</li>
                                <li>Involved in design and implementation using HTML, CSS, and Javascript.</li>
                                <li>Implemented Managers' ideas and debugged code.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
