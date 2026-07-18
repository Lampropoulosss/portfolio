import { notFound } from 'next/navigation';
import { projectData } from '@/lib/data';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import styles from './ProjectDetail.module.css';

export async function generateMetadata({ params }) {
    const { locale, slug } = await params;
    const project = projectData.find((p) => p.slug === slug);
    
    if (!project) return {};

    const t = await getTranslations({ locale, namespace: `Projects.list.${project.translationKey}` });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function ProjectPage({ params }) {
    const { locale, slug } = await params;
    const project = projectData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const t = await getTranslations({ locale, namespace: `Projects.list.${project.translationKey}` });

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>{t('title')}</h1>
            
            <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                ))}
            </div>

            <div className={styles.imageWrapper}>
                <Image
                    src={project.image}
                    alt={t('title')}
                    width={900}
                    height={500}
                    className={styles.projectImage}
                    priority
                />
            </div>

            <p className={styles.description}>{t('description')}</p>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>The Problem</h2>
                <p className={styles.text}>{t('problem')}</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Technical Stack</h2>
                <p className={styles.text}>{t('stack')}</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Measurable Outcome</h2>
                <p className={styles.text}>{t('outcome')}</p>
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Visit Project
            </a>
        </main>
    );
}
