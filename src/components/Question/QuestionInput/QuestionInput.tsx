'use client';
import { useState } from 'react';
import style from './QuestionInput.module.css';
const QuestionInput = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <form id="answerForm" className={style.form}>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="질문을 입력하세요"
        className={style.input}
      ></input>
      <button type="submit" form="answerForm" className={style.answerButton}>
        🙈 결과
      </button>
    </form>
  );
};

export default QuestionInput;
