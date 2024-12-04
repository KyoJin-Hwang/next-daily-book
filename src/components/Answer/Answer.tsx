'use client';

import { useSearchParams } from 'next/navigation';
import style from './Answer.module.css';
import { getAnswerForText } from '@/utils/answer';

const AnswerMessaage = ({
  title,
  result,
}: {
  title: string;
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
              {result || '아직 질문이 없습니다.'}
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

  const search = searchParams.get('search');
  const questionID = search?.split(',')[0] || 0;
  const loveID = search?.split(',')[1] || 0;
  const foodID = search?.split(',')[2] || 0;

  return (
    <div className={style.answerContainer}>
      <p className={style.answerTitle}>오늘의 답변</p>
      <ul className={style.answerUl}>
        <li className={style.answerLi}>
          <AnswerMessaage
            title="질문"
            result={getAnswerForText(1, +questionID)}
          />
        </li>
        <li className={style.answerLi}>
          <AnswerMessaage title="연애" result={getAnswerForText(2, +loveID)} />
        </li>
        <li className={style.answerLi}>
          <AnswerMessaage title="음식" result={getAnswerForText(3, +foodID)} />
        </li>
      </ul>
    </div>
  );
};

export default Answer;
