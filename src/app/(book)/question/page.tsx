import QuestionInput from '@/components/Question/QuestionInput/QuestionInput';
import style from './page.module.css';
import PageWrap from '@/components/Common/PageWrap/PageWrap';

export const metadata = {
  title: '질문',
};
const Answer = () => {
  return (
    <PageWrap>
      <div className={`${style.answerContainer} book-font`}>
        <p>오늘의 질문</p>
        <QuestionInput />
      </div>
    </PageWrap>
  );
};

export default Answer;
