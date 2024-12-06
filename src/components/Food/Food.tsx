'use client';

import Roulette from '../Common/Roulette/Roulette';

import style from './Food.module.css';
const Food = () => {
  return (
    <div className={style.food_container}>
      <p>오늘의 음식</p>
      <Roulette />
    </div>
  );
};

export default Food;
