import { routing } from '@/i18n/routing';
import { projectData, servicesData } from '@/lib/data';

export default function sitemap() {
    const baseUrl = 'https://ioannislampropoulos.com';

    const staticPages = [
        '',
        '/about',
        '/contact',
        '/experience',
        '/projects',
        '/services'
    ];

    const dynamicPages = [
        ...projectData.map(p => `/projects/${p.slug}`),
        ...servicesData.map(s => `/services/${s.slug}`)
    ];

    const allPages = [...staticPages, ...dynamicPages];

    const sitemapEntries = [];

    allPages.forEach((page) => {
        routing.locales.forEach((locale) => {
            const path = page === '' ? `/${locale}` : `/${locale}${page}`;
            const alternates = {};
            routing.locales.forEach(l => {
                alternates[l] = page === '' ? `${baseUrl}/${l}` : `${baseUrl}/${l}${page}`;
            });

            sitemapEntries.push({
                url: `${baseUrl}${path}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: page === '' ? 1 : 0.8,
                alternates: {
                    languages: alternates
                }
            });
        });
    });

    return sitemapEntries;
}
