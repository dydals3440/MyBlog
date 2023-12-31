import MarkdownViewer from '@/app/components/MarkdownViewer';
import { getFeaturedPosts, getPostData } from '@/service/post';
import React from 'react';
import Image from 'next/image';
import PostContent from '@/app/components/PostContent';
import AdjacentPostCard from '@/app/components/AdjacentPostCard';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

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
      <section className='flex shadow-md '>
        {prev && <AdjacentPostCard post={prev} type='prev' />}
        {next && <AdjacentPostCard post={next} type='next' />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
