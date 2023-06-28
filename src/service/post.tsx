import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

export async function getAllPosts(): Promise<Post[]> {
  // process.cwd() 프로젝트 경로를 받아와서
  // data 폴더 안에 있는 posts.json 파일을 읽어옴
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return (
    readFile(filePath, 'utf-8')
      .then<Post[]>(JSON.parse)
      // 포스트가 날짜순으로 최신으로 나오게 정렬!
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );

  //   const data = await fs.readFile(filePath, 'utf-8');
  //   return JSON.parse(data);
}

export async function getFeaturedPosts() {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts() {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다`);
  const content = await readFile(filePath, 'utf-8');
  return { ...metadata, content };
}
