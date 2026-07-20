import { notFound } from 'next/navigation';
import { projectData } from '@/lib/data';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import styles from './ProjectDetail.module.css';

export async function generateMetadata({ params }, parent) {
    const { locale, slug } = await params;
    const project = projectData.find((p) => p.slug === slug);
    
    if (!project) return {};

    const t = await getTranslations({ locale, namespace: `Projects.list.${project.translationKey}` });
    const parentMetadata = await parent;

    const fullTitle = `${t('caseStudy.title')} | Ioannis Lampropoulos`;
    const seoDesc = t('caseStudy.seoDescription');

    return {
        title: { absolute: fullTitle },
        description: seoDesc,
        openGraph: {
            ...parentMetadata.openGraph,
            title: fullTitle,
            description: seoDesc,
        },
        twitter: {
            ...parentMetadata.twitter,
            title: fullTitle,
            description: seoDesc,
        },
        alternates: {
            canonical: `https://ioannislampropoulos.com/${locale}/projects/${slug}`,
            languages: {
                'en': `https://ioannislampropoulos.com/en/projects/${slug}`,
                'el': `https://ioannislampropoulos.com/el/projects/${slug}`,
                'x-default': `https://ioannislampropoulos.com/en/projects/${slug}`,
            },
        },
    };
}

export default async function ProjectPage({ params }) {
    const { locale, slug } = await params;
    const project = projectData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const t = await getTranslations({ locale, namespace: `Projects.list.${project.translationKey}` });
    const tHero = await getTranslations({ locale, namespace: 'Hero' });

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": locale === 'el' ? "Αρχική" : "Home",
                "item": `https://ioannislampropoulos.com/${locale}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": locale === 'el' ? "Έργα" : "Projects",
                "item": `https://ioannislampropoulos.com/${locale}/projects`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": t('caseStudy.title')
            }
        ]
    };

    return (
        <main className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
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
                    alt={`${t('title')} - Web Development Case Study by Ioannis Lampropoulos`}
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

            <div className="ctaButtons">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    {locale === 'el' ? 'Επίσκεψη στο Έργο' : 'Visit Project'}
                </a>
                <Link href="/contact" className="btn-secondary">
                    {tHero('contactMe')}
                </Link>
            </div>
        </main>
    );
}
