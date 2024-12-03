import Answer from '@/components/Answer/Answer';
import PageWrap from '@/components/Common/PageWrap/PageWrap';
export const metadata = {
  title: '답변',
};

const AnswerPage = () => {
  return (
    <PageWrap>
      <Answer></Answer>
    </PageWrap>
  );
};

export default AnswerPage;
