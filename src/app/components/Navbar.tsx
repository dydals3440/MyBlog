import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='flex justify-between p-4'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>{"Yongmin's Blog"}</h1>
      </Link>
      <nav className='flex gap-4 items-center'>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/posts'>posts</Link>
        <Link href='/contact'>contact</Link>
      </nav>
    </header>
  );
}
