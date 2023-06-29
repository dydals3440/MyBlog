'use client';
// 사용자의 입력을 받으므로 클라이언트 컴포넌트가 되야함
import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';

type Form = {
  from: string;
  subject: string;
  message: string;
};
const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: '성공적으로 메일이 보내졌습니다',
          state: 'success',
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          message: '메일 전송이 실패되었습니다. 다시 시도해 주세요',
          state: 'error',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <section className='w-full max-w-md'>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className='w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white'
      >
        <label htmlFor='from' className='font-semibold'>
          Your Email
        </label>
        <input
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor='subject'>Subject</label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          value={form.subject}
          onChange={onChange}
          className='text-black'
        />
        <label htmlFor='message' className='font-semibold'>
          Message
        </label>
        <textarea
          // text area로 변경해서, input보다 더 많은 범위쓸려고
          rows={10}
          id='message'
          name='message'
          required
          autoFocus
          value={form.message}
          onChange={onChange}
          className='text-black'
        />
        <button className='bg-yellow-300 text-black font-bold hover:bg-yellow-400'>
          submit
        </button>
      </form>
    </section>
  );
}
