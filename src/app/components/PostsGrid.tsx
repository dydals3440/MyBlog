import { Post } from '@/service/post';
import React from 'react';

type Props = {
  posts: Post[];
};

// export default function PostsGrid(props: Props)
// 구조분해 할당 사용
export default function PostsGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>{post.title}</li>
      ))}
    </ul>
  );
}
