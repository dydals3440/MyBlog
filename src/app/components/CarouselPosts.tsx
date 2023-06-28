import { getNonFeaturedPosts } from '@/service/post';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className='p-4'>
      <h2 className='text-2xl font-bold my-4'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
