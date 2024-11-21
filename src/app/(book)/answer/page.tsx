import AnswerInput from '@/components/Answer/AnswerInput/AnswerInput';
import styles from './page.module.css';

export const metadata = {
  title: '질문',
};
const Answer = () => {
  return (
    <div className={`${styles.container} book-font`}>
      <p>오늘의 질문</p>
      <AnswerInput />
    </div>
  );
};

export default Answer;
