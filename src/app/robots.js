export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/cdn-cgi/',
        },
        sitemap: 'https://ioannislampropoulos.com/sitemap.xml',
    }
}
