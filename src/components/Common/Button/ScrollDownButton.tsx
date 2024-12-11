import style from './ScrollDwonButton.module.css';

const ScrollDownButton = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: 'smooth',
    });
  };
  return (
    <button className={style.scroll_Button} onClick={handleScrollToBottom}>
      📩
    </button>
  );
};

export default ScrollDownButton;
