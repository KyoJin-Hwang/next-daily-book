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
  questions: {
    question: '',
    love: '',
  },
  selectCategory: () => {},
  removeCategory: () => {},
  updateAnswer: () => {},
  removeAnswer: () => {},
  againAnswer: () => {},
  updateQuestion: () => {},
  removeQuestion: () => {},
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
        removeAnswer: () => set(() => ({ answers: initialState.answers })),
        againAnswer: () =>
          set((state) => {
            const categoryName = state.category.name as keyof CategoryAnswers;
            return {
              answers: {
                ...state.answers,
                [categoryName]: '',
              },
              questions: {
                ...state.questions,
                [categoryName]: '',
              },
              food: {
                ...state.questions,
                [categoryName]: '',
              },
            };
          }),
        updateQuestion: (text: string) =>
          set((state) => {
            const categoryName = state.category.name as keyof CategoryAnswers;
            return {
              questions: {
                ...state.questions,
                [categoryName]: text,
              },
            };
          }),
        removeQuestion: () =>
          set((state) => {
            const categoryName = state.category.name as keyof CategoryAnswers;
            return {
              questions: {
                ...state.questions,
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
