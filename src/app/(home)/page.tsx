import styles from '../home.module.css';

export const metadata = {
  title: 'HOME',
};
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.book}>
        <div className={`${styles.cover} book-font`}>
          <span>🌞</span>
          <span>오늘의 책님</span>
        </div>
        <div className={styles.pages}>
          <div className={styles.page}>Page 1</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
