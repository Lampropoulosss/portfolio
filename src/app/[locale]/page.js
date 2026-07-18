import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services limit={3} />
      <Projects limit={3} />
    </main>
  );
}
