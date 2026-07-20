import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs(locale) {
    const localeDir = path.join(postsDirectory, locale);
    if (!fs.existsSync(localeDir)) {
        return [];
    }
    return fs.readdirSync(localeDir).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug, locale) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, locale, `${realSlug}.md`);
    
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    let image = data.image;
    if (!image || !fs.existsSync(path.join(process.cwd(), 'public', image))) {
        image = '/images/profile_picture.jpg';
    }

    return {
        slug: realSlug,
        ...data,
        image,
        content
    };
}

export function getAllPosts(locale) {
    const slugs = getPostSlugs(locale);
    const posts = slugs
        .map((slug) => getPostBySlug(slug, locale))
        .filter(Boolean)
        .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1));
    return posts;
}

export async function markdownToHtml(markdown) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}
