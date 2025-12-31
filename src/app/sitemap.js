import { routing } from '@/i18n/routing';

export default function sitemap() {
    return routing.locales.map((locale) => ({
        url: `https://ioannislampropoulos.com/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
        alternates: {
            languages: {
                en: 'https://ioannislampropoulos.com/en',
                el: 'https://ioannislampropoulos.com/el',
            },
        },
    }));
}
