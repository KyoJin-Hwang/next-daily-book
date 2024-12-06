import { answers } from '@/data/answers';
import { foods } from '@/data/foods';
import { loves } from '@/data/loves';

/**
 * 주어진 카테고리 이름에 맞는 랜덤 답변 ID 번호
 *
 * @param {string} categoryName - 카테고리 이름 (answer, food, love 등)
 * @returns {number} - 해당 카테고리의 랜덤 답변 ID
 */
export const getAnswerForCategory = (categoryName: string): number => {
  switch (categoryName) {
    case 'question':
      return answers[Math.floor(Math.random() * answers.length)].id;
    case 'food':
      return foods[Math.floor(Math.random() * foods.length)].id;
    case 'love':
      return loves[Math.floor(Math.random() * loves.length)].id;
    default:
      return 0;
  }
};

/**
 * 선택된 카테고리 타입 및 선택된 ID에 맞는 랜덤 답변 String
 *
 * @param {number} type  카테고리 타입 (1: answer, 2: love, 3: food)
 * @param {number} selectID  선택된 ID (23)
 * @returns {string}  선택된 답변
 */
export const getAnswerForText = (
  categoryName: 1 | 2 | 3,
  id: number,
): string => {
  switch (categoryName) {
    case 1:
      const answerObject = answers.find((el) => el.id === id);
      const resultAnswer = answerObject?.answer || '';
      return resultAnswer;
    case 2:
      const loveObj = loves.find((el) => el.id === id);
      const resultLove = loveObj?.answer || '';
      return resultLove;
    case 3:
      const foodObj = foods.find((el) => el.id === id);
      const resultFood = foodObj?.answer || '';
      return resultFood;

    default:
      return '';
  }
};
