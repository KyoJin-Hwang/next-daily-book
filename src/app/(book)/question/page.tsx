import Question from '@/components/Question/Question';
import style from './page.module.css';
import PageWrap from '@/components/Common/PageWrap/PageWrap';

export const metadata = {
  title: '질문',
  description: '궁금한것을 질문하고 오늘의 답변을 얻어보세요!',
};
const QuestionPage = () => {
  return (
    <PageWrap>
      <div className={`${style.pageContainer} book-font`}>
        <Question />
      </div>
    </PageWrap>
  );
};

export default QuestionPage;
