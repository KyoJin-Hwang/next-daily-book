'use client';
import { useTheme } from 'next-themes';
import style from './ThemeSwitcher.module.css';
import SunIcon from '@svg/sun.svg';
import MoonIcon from '@svg/moon.svg';
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleChanger = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className={style.darkDiv}>
      <input
        checked={theme === 'light'}
        onChange={toggleChanger}
        type="checkbox"
        id={style.darkInput}
      />
      <label className={`${style.darkLabel}`} htmlFor={style.darkInput}>
        <SunIcon />
        <MoonIcon />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
