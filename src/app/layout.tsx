import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { Open_Sans } from '@next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });

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
    <html lang='en' className={sans.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Navbar />
        {/* grow 자동으로 main이 가득채워짐 */}
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
