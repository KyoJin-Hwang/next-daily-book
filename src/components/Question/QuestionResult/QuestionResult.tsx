'use client';

import { useCategoryStore } from '@/stores/categoryStore';
import style from './QuestionResult.module.css';
import HoverButton from '@/components/Common/Button/HoverButton';
import { speakOnce } from '@/utils/speak';

const QuestionResult = () => {
  const result = useCategoryStore((state) => state.answers.question);
  const removeAnswer = useCategoryStore((state) => state.removeAnswer);
  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  speakOnce(result);
  return (
    <div className={style.resultContainer}>
      <p className={style.resultText}>{result}</p>

      {!isMobile() && (
        <HoverButton
          type="button"
          onClick={() => speakOnce(result)}
          className={`${style.resultButton}`}
        >
          🎧 음성 다시 듣기
        </HoverButton>
      )}

      <HoverButton
        onClick={removeAnswer}
        type="button"
        className={`${style.resultButton}`}
      >
        🔄 다시 하기
      </HoverButton>
    </div>
  );
};

export default QuestionResult;
