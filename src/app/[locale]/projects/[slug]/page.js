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
        title: t('caseStudy.title'),
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
            <h1 className={styles.title}>{t('caseStudy.title')}</h1>
            
            <div className={styles.metaInfo}>
                <p><strong>{locale === 'el' ? 'Τεχνολογίες (Tech Stack):' : 'Tech Stack:'}</strong> {t('caseStudy.techStack')}</p>
                <p><strong>{locale === 'el' ? 'Ρόλος:' : 'Role:'}</strong> {t('caseStudy.role')}</p>
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

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{locale === 'el' ? 'Η Πρόκληση' : 'The Challenge'}</h2>
                <p className={styles.text}>{t('caseStudy.challenge')}</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{locale === 'el' ? 'Η Προσέγγιση & Τεχνική Υλοποίηση' : 'My Approach & Technical Execution'}</h2>
                <p className={styles.text}>{t('caseStudy.approach')}</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{locale === 'el' ? 'Το Αποτέλεσμα' : 'The Outcome'}</h2>
                <p className={styles.text}>{t('caseStudy.outcome')}</p>
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {locale === 'el' ? 'Επίσκεψη στο Έργο' : 'Visit Project'}
            </a>
        </main>
    );
}
