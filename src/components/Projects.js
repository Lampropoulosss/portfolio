import styles from './Projects.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { projectData } from '@/lib/data';

export default function Projects({ limit }) {
    const t = useTranslations('Projects');
    const tHero = useTranslations('Hero');
    const displayedProjects = limit ? projectData.slice(0, limit) : projectData;

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>{t('title')}</h2>
                <div className={styles.grid}>
                    {displayedProjects.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={`${t(`list.${project.translationKey}.title`)} - Web Development Project by Ioannis Lampropoulos`}
                                    width={400}
                                    height={250}
                                    className={styles.projectImage}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{t(`list.${project.translationKey}.title`)}</h3>

                                {/* Tech Stack Tags */}
                                <div className={styles.tags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                <p className={styles.cardDesc}>{t(`list.${project.translationKey}.description`)}</p>

                                <div className={styles.links}>
                                    <Link href={`/projects/${project.slug}`} className={styles.link}>
                                        {t('viewProject')} &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {limit ? (
                    <div className="ctaButtons">
                        <Link href="/projects" className="btn-primary">
                            {t('seeAllProjects')}
                        </Link>
                    </div>
                ) : (
                    <div className="ctaButtons">
                        <Link href="/contact" className="btn-primary">
                            {tHero('contactMe')}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}