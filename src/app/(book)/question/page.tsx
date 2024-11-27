import Question from '@/components/Question/Question/Question';
import style from './page.module.css';
import PageWrap from '@/components/Common/PageWrap/PageWrap';

export const metadata = {
  title: '질문',
};
const Answer = () => {
  return (
    <PageWrap>
      <div className={`${style.pageContainer} book-font`}>
        <Question />
      </div>
    </PageWrap>
  );
};

export default Answer;
