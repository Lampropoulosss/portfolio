import styles from './Projects.module.css';
import Image from 'next/image';

const projects = [
    {
        title: "robinrich.gr",
        description: "Production maintenance and feature expansion for an active commercial platform. Successfully diagnosed and resolved legacy bugs while implementing new client-requested modules.",
        tags: ["Next.js", "Firebase", "CSS3", "Maintenance"],
        image: "/images/project_robinrich.png",
        link: "https://robinrich.gr"
    },
    {
        title: "mp3convert.tech",
        description: "Advanced media tool leveraging client-side processing for conversion to minimize server load. Powered by a Next.js backend, integrated with a high-throughput Golang API for real-time streaming.",
        tags: ["Next.js", "Golang (Stream API)", "Client-Side Processing"],
        image: "/images/project_mp3convert.png",
        link: "https://mp3convert.tech"
    },
    {
        title: "yt2mp3.tech",
        description: "A comprehensive media SaaS platform. Handled the full product lifecycle from UI/UX design to deployment, focusing on responsive design and user retention.",
        tags: ["Next.js", "React", "Node.js", "UX/UI"],
        image: "/images/project_yt2mp3.png",
        link: "https://yt2mp3.tech"
    },
    {
        title: "Modular React Blog",
        description: "A distinct exploration of component-based architecture. Built to demonstrate proficiency in React hooks, state management patterns, and dynamic routing.",
        tags: ["React", "State Management", "Component Architecture"],
        image: "/images/project_blog.png",
        link: "https://github.com/Lampropoulosss/Simple-React-Blog"
    },
    {
        title: "Chaotic Destiny Hosting",
        description: "Front-end development for a hosting provider. Collaborated directly with management to translate business requirements into responsive web interfaces.",
        tags: ["HTML5", "CSS3", "JavaScript", "Customer Support"],
        image: "/images/project_hosting.png",
        link: "https://github.com/Lampropoulosss/Chaotic-Destiny-Hosting"
    },
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

                                {/* Tech Stack Tags */}
                                <div className={styles.tags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

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