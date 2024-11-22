'use client';
import { useState } from 'react';
import style from './QuestionInput.module.css';
import { useTheme } from 'next-themes';
import { useHover } from '@/hooks/useHover';
const QuestionInput = () => {
  const { theme } = useTheme();

  const [text, setText] = useState('');
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  const backgroundColor = isHovered
    ? theme === 'dark'
      ? 'black'
      : '#ffcc89'
    : theme === 'dark'
      ? '#777'
      : '#ebebeb';

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
      <button
        type="submit"
        form="answerForm"
        className={style.answerButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: backgroundColor }}
      >
        🙈 결 과
      </button>
    </form>
  );
};

export default QuestionInput;
