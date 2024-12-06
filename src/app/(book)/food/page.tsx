import PageWrap from '@/components/Common/PageWrap/PageWrap';
import Food from '@/components/Food/Food';
import style from './page.module.css';
export const metadata = {
  title: '음식',
  description: '추천을 받고 오늘의 추천 메뉴를 추천받아보세요!',
};

const FoodPage = () => {
  return (
    <PageWrap>
      <div className={`${style.pageContainer} book-font`}>
        <Food />
      </div>
    </PageWrap>
  );
};

export default FoodPage;
