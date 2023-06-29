import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import ContactForm from '../components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact me',
  description: 'Contact to Yongmin',
};

const LINKS = [
  { icon: <AiFillGithub />, url: 'https://github.com/dydals3440' },
  { icon: <AiFillLinkedin />, url: 'www.linkedin.com/in/dydals3440' },
  { icon: <AiFillInstagram />, url: 'https://www.instagram.com/yong__min_kim' },
];

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p>dydals3440@gmail.com</p>
      <ul className='flex gap-4 my-2'>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='text-5xl hover:text-yellow-400'
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className='text-3xl font-bold my-8'>Or Send me an Email</h2>
      <ContactForm />
    </section>
  );
}
