import Image from 'next/image';
import profileImage from '../../../public/images/profile.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='profile-image'
        width={250}
        height={250}
      />
      <h2 className='text-3xl font-bold mt-2'>{"Hello Guys I'm Yongmin"}</h2>
      <h3 className='font-semibold'>Software Engineer</h3>
      <p>코딩하는 경영학부, 김용민</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-md py-1 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
