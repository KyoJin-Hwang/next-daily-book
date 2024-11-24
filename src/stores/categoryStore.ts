import { CategoryAnswers, CategoryState } from '@/models/Store';
import { getAnswerForCategory } from '@/utils/answer';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const initialState: CategoryState = {
  category: { name: '', id: 0, color: '' },
  answers: {
    question: '',
    love: '',
    food: '',
  },
  selectCategory: () => {},
  removeCategory: () => {},
  updateAnswer: () => {},
};

// Zustand store 생성
export const useCategoryStore = create<CategoryState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        selectCategory: (category) => set({ category }),
        removeCategory: () => set({ category: initialState.category }),
        updateAnswer: () =>
          set((state) => {
            let selectedAnswer = '';
            selectedAnswer = getAnswerForCategory(state.category.name);
            const categoryName = state.category.name as keyof CategoryAnswers;

            return {
              answers: { ...state.answers, [categoryName]: selectedAnswer },
            };
          }),
      }),
      { name: 'category' },
    ),
    { name: '카테고리' },
  ),
);
