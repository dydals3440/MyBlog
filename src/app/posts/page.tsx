import { getAllPosts } from '@/service/post';
import FeaturedPosts from '../components/FeaturedPosts';
import FilteredPosts from '../components/FilteredPosts';

export default async function PostPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilteredPosts posts={posts} categories={categories} />;
}
