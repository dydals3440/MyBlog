import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: {
    default: 'YOLOG',
    template: 'YOLOG | %s',
  },
  description: '풀스택 개발자가 되기 위해 노력하는 사람의 블로그',
  icons: {
    icon: '/blog/public/images/profile.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
          rel='stylesheet'
        />
        <title>{metadata.title.default}</title>
        <meta name='description' content={metadata.description} />
        <link rel='icon' href={metadata.icons.icon} />
      </Head>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Navbar />
        {/* grow 자동으로 main이 가득채워짐 */}
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </>
  );
}
