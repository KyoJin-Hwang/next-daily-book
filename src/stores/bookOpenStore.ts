import { BookOpenState } from '@/models/Store';
import { checkIfOpenToday, todayFuc } from '@/utils/date';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useBookOpenStore = create<BookOpenState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        setOpen: () => {
          set(() => ({ isOpen: true }));
          if (typeof window !== 'undefined') {
            localStorage.setItem('lastOpenedDate', todayFuc(2));
          }
        },
        initializeOpenState: () => {
          if (typeof window !== 'undefined') {
            set(() => ({ isOpen: checkIfOpenToday() }));
          }
        },
      }),
      { name: 'isOpen' },
    ),
    { name: '책 커버상태' },
  ),
);
