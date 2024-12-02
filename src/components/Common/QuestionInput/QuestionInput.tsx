'use client';
import { useState } from 'react';
import style from './QuestionInput.module.css';
import HoverButton from '@/components/Common/Button/HoverButton';

const QuestionInput = ({
  title,
  update,
}: {
  title: string;
  update: () => void;
}) => {
  const [text, setText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    update();
    setText('');
  };
  return (
    <form id="questionForm" className={style.form} onSubmit={handleSubmit}>
      <p>오늘의 {title}</p>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="질문을 입력하세요"
        className={style.questionInput}
      ></input>
      <HoverButton
        type="submit"
        form="questionForm"
        className={style.questionButton}
      >
        🙈 결 과
      </HoverButton>
    </form>
  );
};

export default QuestionInput;
