import style from './Header.module.css';
const Header = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('ko-KR'); // 'YYYY-MM-DD' 형식
  return <div className={style.header}>{formattedDate}</div>;
};

export default Header;
