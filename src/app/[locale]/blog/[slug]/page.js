import { getPostBySlug, markdownToHtml } from '@/lib/blog';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from './blogDetail.module.css';

export async function generateMetadata({ params }, parent) {
    const { locale, slug } = await params;
    const post = getPostBySlug(slug, locale);

    if (!post) return {};

    const parentMetadata = await parent;
    
    // Explicit dynamic opengraph-image per post, overriding the global fallback
    const ogImage = post.image ? [{
        url: `https://ioannislampropoulos.com${post.image}`,
        width: 1200,
        height: 630,
        alt: post.title,
    }] : parentMetadata.openGraph?.images;

    const twImage = post.image ? [`https://ioannislampropoulos.com${post.image}`] : parentMetadata.twitter?.images;

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            ...parentMetadata.openGraph,
            title: post.title,
            description: post.excerpt,
            images: ogImage,
        },
        twitter: {
            ...parentMetadata.twitter,
            title: post.title,
            description: post.excerpt,
            images: twImage,
        },
        robots: {
            index: false,
            follow: false,
        },
        alternates: {
            canonical: `https://ioannislampropoulos.com/${locale}/blog/${slug}`,
            languages: {
                'en': `https://ioannislampropoulos.com/en/blog/${slug}`,
                'el': `https://ioannislampropoulos.com/el/blog/${slug}`,
                'x-default': `https://ioannislampropoulos.com/en/blog/${slug}`,
            },
        },
    };
}

export default async function BlogPost({ params }) {
    const { locale, slug } = await params;
    const post = getPostBySlug(slug, locale);

    if (!post) {
        notFound();
    }

    const contentHtml = await markdownToHtml(post.content || '');
    
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image ? `https://ioannislampropoulos.com${post.image}` : `https://ioannislampropoulos.com/images/profile_picture.jpg`,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": "Ioannis Lampropoulos"
        },
        "description": post.excerpt
    };

    return (
        <main className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <article className={styles.article}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.meta}>
                    <time className={styles.date}>
                        {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                </div>
                {post.image && (
                    <div className={styles.heroImage}>
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={900}
                            height={450}
                            className={styles.image}
                            priority
                        />
                    </div>
                )}
                <div 
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: contentHtml }} 
                />
            </article>
        </main>
    );
}
