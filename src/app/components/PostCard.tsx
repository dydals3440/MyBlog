import { Post } from '@/service/post';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type Props = { post: Post };
export default function PostCard({
  post: { title, description, date, category, featured, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-m overflow-hidden shadow-md hover:shadow-xl'>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={300}
        />
        <div className='flex flex-col items-center p-4'>
          {/* flex가 되어있어도 self-end로 혼자만 끝에 정렬 */}
          <time className='self-end text-gray-700'>{date.toString()}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          {/* truncate을 사용할떄는 너비를 가득 채워줘야함 그래야 텍스트가 넘어가면 truncate됨 */}
          <p className='w-full truncate text-center'>{description}</p>
          <span className='text-sm rounded-lg bg-green-100 px-2 my-2'>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
