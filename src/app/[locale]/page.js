import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }, parent) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.home' });
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
    alternates: {
      canonical: `https://ioannislampropoulos.com/${locale}`,
      languages: {
        'en': 'https://ioannislampropoulos.com/en',
        'el': 'https://ioannislampropoulos.com/el',
        'x-default': 'https://ioannislampropoulos.com/en',
      },
    },
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services limit={4} />
      <Projects limit={3} />
      <FAQ />
    </main>
  );
}
