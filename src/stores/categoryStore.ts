import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CategoryAnswers, CategoryState } from '@/models/Store';
import { getAnswerForCategory } from '@/utils/answer';

const initialState: CategoryState = {
  category: { name: '', id: 0, color: '' },
  answers: {
    question: 0,
    love: 0,
    food: 0,
  },
  selectCategory: () => {},
  removeCategory: () => {},
  updateAnswer: () => {},
  removeAnswer: () => {},
  againAnswer: () => {},
};

export const useCategoryStore = create<CategoryState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        selectCategory: (category) =>
          set(() => ({
            category,
          })),
        removeCategory: () => set(() => ({ category: initialState.category })),
        removeAnswer: () => set(() => ({ answers: initialState.answers })),
        updateAnswer: () =>
          set((state) => {
            const selectedAnswer = getAnswerForCategory(state.category.name);
            const categoryName = state.category.name as keyof CategoryAnswers;

            return {
              answers: {
                ...state.answers,
                [categoryName]: selectedAnswer,
              },
            };
          }),
        againAnswer: () =>
          set((state) => {
            const categoryName = state.category.name as keyof CategoryAnswers;
            return {
              answers: {
                ...state.answers,
                [categoryName]: '',
              },
            };
          }),
      }),
      { name: 'category' },
    ),
    { name: '카테고리' },
  ),
);
