import MarkdownViewer from '@/app/components/MarkdownViewer';
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

      <MarkdownViewer content={post.content} />
    </>
  );
}
