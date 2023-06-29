import PostsGrid from './PostsGrid';
import { getAllPosts } from '@/service/post';

export default async function FeaturedPosts() {
  // 1. 모든 포스트 데이터를 읽어옴 (서버 상에서)
  const posts = await getAllPosts();
  // 2. 모든 포스트 데이터를 보여줌
  return (
    <section>
      <h2 className='text-2xl font-bold my-4'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
