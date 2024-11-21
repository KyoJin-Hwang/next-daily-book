import AnswerInput from '@/components/Answer/AnswerInput/AnswerInput';
import style from './page.module.css';

export const metadata = {
  title: '질문',
};
const Answer = () => {
  return (
    <div className={`${style.answerContainer} book-font`}>
      <p>오늘의 질문</p>
      <AnswerInput />
    </div>
  );
};

export default Answer;
