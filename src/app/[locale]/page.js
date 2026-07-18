import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
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
    </main>
  );
}
