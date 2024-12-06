import PageWrap from '@/components/Common/PageWrap/PageWrap';
import Food from '@/components/Food/Food';
import style from './page.module.css';
export const metadata = {
  title: '음식',
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
