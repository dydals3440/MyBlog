import FeaturedPosts from './components/FeaturedPosts';
import Hero from './components/Hero';

export default function HomePage() {
  return (
    <>
      <section className='bg-gray-200'>
        <Hero />
        <FeaturedPosts />
      </section>
    </>
  );
}
