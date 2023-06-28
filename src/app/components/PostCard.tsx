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
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={300}
      />
      <div>
        <time>{date.toString()}</time>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{category}</span>
      </div>
    </Link>
  );
}
