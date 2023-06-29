'use client';
// 사용자의 입력을 받으므로 클라이언트 컴포넌트가 되야함
import { ChangeEvent, FormEvent, useState } from 'react';

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor='from'>Your Email</label>
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
        />
        <label htmlFor='message'>Your Email</label>
        <textarea
          // text area로 변경해서, input보다 더 많은 범위쓸려고
          rows={10}
          id='message'
          name='message'
          required
          autoFocus
          value={form.message}
          onChange={onChange}
        />
        <button>submit</button>
      </form>
    </>
  );
}
