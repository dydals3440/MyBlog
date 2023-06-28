import { Post } from '@/service/post';
import Image from 'next/image';
import React from 'react';
import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

// export default function PostsGrid(props: Props)
// 구조분해 할당 사용
export default function PostsGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
