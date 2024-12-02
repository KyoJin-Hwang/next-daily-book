'use client';

import { useCategoryStore } from '@/stores/categoryStore';
import style from './QuestionResult.module.css';
import HoverButton from '@/components/Common/Button/HoverButton';
import { speakOnce } from '@/utils/speak';
import { useEffect } from 'react';
import { isMobile } from '@/utils/global';

const QuestionResult = ({ result }: { result: string }) => {
  const againAnswer = useCategoryStore((state) => state.againAnswer);

  useEffect(() => {
    if (!isMobile()) {
      speakOnce(result);
    }
  }, [result]);
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
        onClick={againAnswer}
        type="button"
        className={`${style.resultButton}`}
      >
        🔄 다시 하기
      </HoverButton>
    </div>
  );
};

export default QuestionResult;
