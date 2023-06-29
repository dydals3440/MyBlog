import Hero from '../components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About me',
  description: 'Yongmin 커리어 소개',
};

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>{'저를 소개합니다!'}</h2>
        <p>
          개발을 사랑하는 경영학도 <br />
          사람들에게 도움이 되는 웹/앱을 개발하고자 본인을 성장시키고 있는
          사람입니다.
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          어딘가 (-Now) <br />
          두번쨰 어딘가 (-2019) <br />
          세번쨰 어딘가 (-2017) <br />
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Vue, Node</p>
        Git, Clean Code <br />
        VS Code
      </section>
    </>
  );
}
