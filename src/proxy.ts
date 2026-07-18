import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
    ...routing,
    // Disable automatic header generation to prevent conflicts
    alternateLinks: false
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
