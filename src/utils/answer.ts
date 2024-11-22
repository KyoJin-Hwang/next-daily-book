import { answers } from '@/data/answers';
import { foods } from '@/data/foods';
import { loves } from '@/data/loves';

/**
 * 주어진 카테고리 이름에 맞는 랜덤 답변을 반환하는 함수
 *
 * @param {string} categoryName - 카테고리 이름 (answer, food, love 등)
 * @returns {string} - 해당 카테고리의 랜덤 답변
 */
export const getAnswerForCategory = (categoryName: string): string => {
  switch (categoryName) {
    case 'answer':
      return answers[Math.floor(Math.random() * answers.length)].answer;
    case 'food':
      return foods[Math.floor(Math.random() * foods.length)].name;
    case 'love':
      return loves[Math.floor(Math.random() * loves.length)].answer;
    default:
      return '';
  }
};
