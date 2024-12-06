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
  text,
  result,
}: {
  title: string;
  text: string | undefined;
  result: string | undefined;
}) => {
  return (
    <>
      <span className={style.messageTitle}>{title}</span>
      <div className={style.messageAnswer_Div}>
        {title === '오늘의 음식' ? (
          <>
            <div className={style.messageAnswer}>
              <p className={`${style.messageAnswer} book-font`}>
                {result || '오늘의 음식을 추천받으세요!'}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className={style.messageAnswer}>
              Question
              <p className={`${style.messageAnswer} book-font`}>{text}</p>
            </div>
            <div className={style.messageAnswer}>
              Answer
              <p className={`${style.messageAnswer} book-font`}>
                {result || ''}
              </p>
            </div>
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
    { id: 0, text: '' },
  ]);
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) setResult(JSON.parse(decodeURIComponent(search)));
  }, [search]);
  return (
    <div className={style.answerContainer}>
      <ul className={style.answerUl}>
        <li className={style.answerLi}>
          <AnswerMessaage
            title="오늘의 질문"
            text={result[0].text}
            result={getAnswerForText(1, result[0].id || 0)}
          />
        </li>
        <li className={style.answerLi}>
          <AnswerMessaage
            title="오늘의 연애"
            text={result[1].text}
            result={getAnswerForText(2, result[1].id || 0)}
          />
        </li>
        <li className={style.answerLi}>
          <AnswerMessaage
            title="오늘의 음식"
            text={result[2].text}
            result={getAnswerForText(3, result[2].id || 0)}
          />
        </li>
      </ul>
    </div>
  );
};

export default Answer;
