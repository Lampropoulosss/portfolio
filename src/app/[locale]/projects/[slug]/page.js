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
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
                    <strong style={{ whiteSpace: 'nowrap' }}>{locale === 'el' ? 'Τεχνολογίες (Tech Stack):' : 'Tech Stack:'}</strong>
                    <div className={styles.tags} style={{ margin: 0, gap: '8px' }}>
                        {t('caseStudy.techStack').split(',').map((tech, index) => (
                            <span key={index} className={styles.tag}>{tech.trim()}</span>
                        ))}
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <strong style={{ whiteSpace: 'nowrap' }}>{locale === 'el' ? 'Ρόλος:' : 'Role:'}</strong> 
                    <span className={styles.roleText}>{t('caseStudy.role')}</span>
                </div>
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
