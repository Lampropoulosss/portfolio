import styles from './Projects.module.css';
import Image from 'next/image';

const projects = [
    {
        title: "Chaotic Destiny Hosting",
        description: "A hosting platform where I worked as a Volunteer Front-End Dev and Support Agent. Involved in design and implementation using vanilla web technologies.",
        image: "/images/project_hosting.png",
        link: "https://github.com/Lampropoulosss/Chaotic-Destiny-Hosting"
    },
    {
        title: "yt2mp3.tech",
        description: "Full-Stack application for converting YouTube videos to MP3. Built with Next.js, featuring a custom design and backend integration.",
        image: "/images/project_yt2mp3.png",
        link: "https://yt2mp3.tech"
    },
    {
        title: "Simple React Blog",
        description: "A blog project built with React, showcasing modern component architecture and state management.",
        image: "/images/project_blog.png",
        link: "https://github.com/Lampropoulosss/Simple-React-Blog"
    },
    {
        title: "robinrich.gr",
        description: "Website maintenance and feature addition project. Handling real-world requirements and bug fixes.",
        image: "/images/project_robinrich.png",
        link: "https://robinrich.gr"
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={250}
                                    className={styles.projectImage}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.description}</p>
                                <div className={styles.links}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        View Project &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
