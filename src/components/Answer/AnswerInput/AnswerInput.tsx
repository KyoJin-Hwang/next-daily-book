'use client';
import { useState } from 'react';
import styles from './AnswerInput.module.css';
const AnswerInput = () => {
  const [text, setText] = useState(''); // 상태 관리

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value); // 입력 처리
  };
  console.log(text);
  return (
    <form id="answerForm">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="질문을 입력하세요"
        className={styles.input}
      ></input>
      <button
        type="submit"
        form="answerForm"
        onClick={() => window.open('/', '_self')}
      >
        🙈결과
      </button>
    </form>
  );
};

export default AnswerInput;
