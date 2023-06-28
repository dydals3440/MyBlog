import React from 'react';
import PostsGrid from './PostsGrid';
import { getAllPosts } from '@/service/post';

export default async function FeaturedPosts() {
  // 1. 모든 포스트 데이터를 읽어옴
  const posts = await getAllPosts();
  console.log(posts);
  // 2. 모든 포스트 데이터를 보여줌
  return (
    <section>
      <h2 className='font-bold'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
