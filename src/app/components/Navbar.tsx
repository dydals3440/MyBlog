import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='flex'>
      <Link href='/'>
        <h1>{"Yongmin's Blog"}</h1>
      </Link>
      <nav>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/posts'>posts</Link>
        <Link href='/contact'>contact</Link>
      </nav>
    </header>
  );
}
