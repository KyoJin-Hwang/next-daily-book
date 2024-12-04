'use client';

import { useSearchParams } from 'next/navigation';
import style from './Answer.module.css';
import { getAnswerForText } from '@/utils/answer';
import { useEffect, useState } from 'react';

interface SeachResult {
  id: number;
  text?: string;
}

const AnswerMessaage = ({
  title,
  question,
  result,
}: {
  title: string;
  question?: string | undefined;
  result: string | undefined;
}) => {
  return (
    <>
      <span className={style.messageTitle}>{title}</span>
      <div
        className={`${title === '음식' ? style.messageFood_Div : style.messageAnswer_Div}`}
      >
        {title === '음식' ? (
          <>
            <img src="/" alt="음식이미지" className={style.messageImg} />
            <p className={`${style.messageAnswer} book-font`}>{result || ''}</p>
          </>
        ) : (
          <>
            <p className={`${style.messageAnswer} book-font`}>
              {`질문 : `}
              {question || '아직 질문이 없습니다.'}
            </p>
            <p className={`${style.messageAnswer} book-font`}>
              {`답변 : `}
              {result || ''}
            </p>
          </>
        )}
      </div>
    </>
  );
};
const Answer = () => {
  const searchParams = useSearchParams();

  const [result, setResult] = useState<SeachResult[]>([
    { id: 0, text: '' },
    { id: 0, text: '' },
    { id: 0 },
  ]);
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) setResult(JSON.parse(decodeURIComponent(search)));
  }, [search]);
  return (
    <div className={style.answerContainer}>
      <p className={style.answerTitle}>오늘의 답변</p>
      <ul className={style.answerUl}>
        <li className={style.answerLi}>
          <AnswerMessaage
            title="질문"
            question={result[0].text}
            result={getAnswerForText(1, result[0].id || 0)}
          />
        </li>
        <li className={style.answerLi}>
          <AnswerMessaage
            title="연애"
            question={result[1].text}
            result={getAnswerForText(2, result[1].id || 0)}
          />
        </li>
        <li className={style.answerLi}>
          <AnswerMessaage
            title="음식"
            result={getAnswerForText(3, result[2].id || 0)}
          />
        </li>
      </ul>
    </div>
  );
};

export default Answer;
