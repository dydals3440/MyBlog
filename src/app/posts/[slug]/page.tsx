import MarkdownViewer from '@/app/components/MarkdownViewer';
import { getPostData } from '@/service/post';
import React from 'react';
import Image from 'next/image';
import PostContent from '@/app/components/PostContent';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PantsPage({ params: { slug } }: Props) {
  // const post = await getPostData(slug)를 구조분해할당
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
      <Image
        className='w-full h-1/5 max-h-[500px]'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      {/* 컴포넌트화 시킴 */}
      <PostContent post={post} />
      {/* 이전 포스트 다음 포스트 */}
      <section>
        {prev && <p>{prev.title}</p>}
        {next && <p>{next.title}</p>}
      </section>
    </article>
  );
}
