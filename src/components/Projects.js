import styles from './Projects.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const projectData = [
    {
        tags: ["Next.js", "Firebase", "CSS3", "Maintenance"],
        image: "/images/project_robinrich.png",
        link: "https://robinrich.gr"
    },
    {
        tags: ["Next.js", "Golang (Stream API)", "Client-Side Processing"],
        image: "/images/project_mp3convert.png",
        link: "https://github.com/Lampropoulosss/mp3convert.tech"
    },
    {
        tags: ["Next.js", "React", "Node.js", "UX/UI"],
        image: "/images/project_yt2mp3.png",
        link: "https://yt2mp3.tech"
    },
    {
        tags: ["React", "State Management", "Component Architecture"],
        image: "/images/project_blog.png",
        link: "https://github.com/Lampropoulosss/Simple-React-Blog"
    },
    {
        tags: ["HTML5", "CSS3", "JavaScript", "Customer Support"],
        image: "/images/project_hosting.png",
        link: "https://github.com/Lampropoulosss/Chaotic-Destiny-Hosting"
    },
];

export default function Projects() {
    const t = useTranslations('Projects');

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>{t('title')}</h2>
                <div className={styles.grid}>
                    {projectData.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={t(`list.${index}.title`)}
                                    width={400}
                                    height={250}
                                    className={styles.projectImage}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{t(`list.${index}.title`)}</h3>

                                {/* Tech Stack Tags */}
                                <div className={styles.tags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                <p className={styles.cardDesc}>{t(`list.${index}.description`)}</p>

                                <div className={styles.links}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        {t('viewProject')} &rarr;
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