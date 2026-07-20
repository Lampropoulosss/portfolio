import { getAllPosts } from '@/lib/blog';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import styles from './blog.module.css';

export async function generateMetadata({ params }, parent) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.blog' });
    const parentMetadata = await parent;

    return {
        title: t('title'),
        description: t('description'),
        openGraph: {
            ...parentMetadata.openGraph,
            title: t('title'),
            description: t('description'),
        },
        twitter: {
            ...parentMetadata.twitter,
            title: t('title'),
            description: t('description'),
        },
        robots: {
            index: false,
            follow: false,
        },
        alternates: {
            canonical: `https://ioannislampropoulos.com/${locale}/blog`,
            languages: {
                'en': `https://ioannislampropoulos.com/en/blog`,
                'el': `https://ioannislampropoulos.com/el/blog`,
                'x-default': `https://ioannislampropoulos.com/en/blog`,
            },
        },
    };
}

export default async function BlogIndex({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Blog' });
    const posts = getAllPosts(locale);

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.description}>{t('description')}</p>
            
            {posts.length === 0 ? (
                <div className={styles.noPosts}>
                    <p>{t('noPosts')}</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {posts.map(post => (
                        <article key={post.slug} className={styles.card}>
                            {post.image && (
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={250}
                                        className={styles.postImage}
                                    />
                                </div>
                            )}
                            <div className={styles.content}>
                                <h2 className={styles.postTitle}>
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <time className={styles.date}>
                                    {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                                </time>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                    {t('readMore')} &rarr;
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </main>
    );
}
