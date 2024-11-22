import { BookOpenState } from '@/models/Store';
import { checkIfOpenToday, todayFuc } from '@/utils/date';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useBookOpenStore = create<BookOpenState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: checkIfOpenToday(),
        setOpen: () => {
          set(() => ({ isOpen: true }));
          localStorage.setItem('lastOpenedDate', todayFuc(2));
        },
      }),
      { name: 'isOpen' },
    ),
    { name: '책 커버상태' },
  ),
);
