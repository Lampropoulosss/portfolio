import { useTranslations } from 'next-intl';
import styles from './FAQ.module.css';

export default function FAQ() {
    const t = useTranslations('FAQ');

    const faqs = [
        { q: t('q1'), a: t('a1') },
        { q: t('q2'), a: t('a2') },
        { q: t('q3'), a: t('a3') },
        { q: t('q4'), a: t('a4') },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section className={styles.faqSection}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className={styles.container}>
                <h2 className={styles.title}>{t('title')}</h2>
                <div className={styles.accordion}>
                    {faqs.map((faq, i) => (
                        <details key={i} className={styles.item}>
                            <summary className={styles.question}>
                                {faq.q}
                                <span className={styles.icon}></span>
                            </summary>
                            <div className={styles.answer}>
                                <p>{faq.a}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
