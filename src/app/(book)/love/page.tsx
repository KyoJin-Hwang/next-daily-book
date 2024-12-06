import PageWrap from '@/components/Common/PageWrap/PageWrap';
import Love from '@/components/Love/Love';

import style from './page.module.css';

export const metadata = {
  title: '연애',
  description: '연애관련 질문을 하고 오늘의 답변을 얻어보세요!',
};

const LovePage = () => {
  return (
    <PageWrap>
      <div className={`${style.pageContainer} book-font`}>
        <Love />
      </div>
    </PageWrap>
  );
};

export default LovePage;
