import Answer from '@/components/Answer/Answer';
import PageWrap from '@/components/Common/PageWrap/PageWrap';
export const metadata = {
  title: '답변',
  description: '오늘의 답변을 모아놓은 페이지입니다.',
};

const AnswerPage = () => {
  return (
    <PageWrap>
      <Answer></Answer>
    </PageWrap>
  );
};

export default AnswerPage;
