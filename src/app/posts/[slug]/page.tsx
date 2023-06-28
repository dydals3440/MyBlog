import { getPostData } from '@/service/post';
import React from 'react';
type Props = {
  params: {
    slug: string;
  };
};
export default async function PantsPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
