'use client';
import { useState } from 'react';
import style from './TextInput.module.css';
import HoverButton from '@/components/Common/Button/HoverButton';

const TextInput = ({
  title,
  update1,
  update2,
}: {
  title: string;
  update1?: () => void;
  update2?: (text: string) => void;
}) => {
  const [text, setText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (update1) update1();
    if (update2) update2(text);
    setText('');
  };
  return (
    <form
      id="questionForm"
      className={style.textInput_Form}
      onSubmit={handleSubmit}
    >
      <p>오늘의 {title}</p>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="질문을 입력하세요"
        className={style.textInput_Input}
      ></input>
      <HoverButton
        type="submit"
        form="questionForm"
        className={style.textInput_Button}
      >
        🙈 결 과
      </HoverButton>
    </form>
  );
};

export default TextInput;
