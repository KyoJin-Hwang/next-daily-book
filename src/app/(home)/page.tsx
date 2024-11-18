// import styles from './page.module.css';

import Header from '@/components/Common/Header/Header';
import Footer from '@/components/Common/Footer/Footer';
import HomeBook from '@/components/Home/Book/HomeBook';

export const metadata = {
  title: 'HOME',
};

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBook />
      <Footer />
    </div>
  );
};

export default Home;
