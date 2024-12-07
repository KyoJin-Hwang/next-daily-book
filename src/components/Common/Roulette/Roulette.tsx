'use client';

import React, { useEffect, useState } from 'react';

import { foods } from '@/data/foods';

import { useCategoryStore } from '@/stores/categoryStore';

import style from './Roulette.module.css';
import HoverButton from '../Button/HoverButton';

const Roulette = () => {
  const update = useCategoryStore((state) => state.updateAnswer);
  const foodID = useCategoryStore((state) => state.answers.food);

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isSpinning, setIsSpinning] = useState(false);

  console.log(currentIndex);
  useEffect(() => {
    if (foodID) {
      startRoulette();
    }
  }, [foodID]);

  const startRoulette = () => {
    setIsSpinning(true);

    let currentIndexCopy = currentIndex;
    const currentInterval = 70; // 속도

    const spin = () => {
      currentIndexCopy = (currentIndexCopy + 1) % foods.length;

      setCurrentIndex(() => {
        if (currentIndexCopy === foodID) {
          return foodID;
        } else {
          return currentIndexCopy;
        }
      });

      // 목표 index에 도달하지 않으면 계속 회전
      if (currentIndexCopy !== foodID) {
        setTimeout(spin, currentInterval); // 속도에 맞춰 회전
      } else {
        setIsSpinning(false); // 목표에 도달하면 멈춤
      }
    };

    spin();
  };

  return (
    <div className={style.roulette_container}>
      <div className={style.roulette}>
        <div
          className={style.roulette_list}
          style={{ transform: `translateY(-${(currentIndex - 1) * 50}px)` }}
        >
          {foods.map((item, index) => (
            <div className={style.roulette_item} key={item.id}>
              {item.answer}
            </div>
          ))}
        </div>
      </div>
      <HoverButton
        className={style.roulette_button}
        type="button"
        onClick={update}
        disabled={isSpinning}
      >
        {isSpinning ? '추첨중...' : '추천 받기'}
      </HoverButton>
    </div>
  );
};

export default Roulette;
