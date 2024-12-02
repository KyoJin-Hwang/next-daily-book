export interface Category {
  name: string;
  id: number;
  color: string;
}

export interface CategoryAnswers {
  question: number;
  love: number;
  food: number;
}
/**
 * 카테고리 상태를 관리하는 인터페이스
 *
 * @type {object}
 * @property {Category} category - 선택된 카테고리 및 ID
 * @property {CategoryAnswer} answers - 각 카테고리별 답변
 * @property {Function} selectCategory - 카테고리 선택 함수
 * @property {Function} updateAnswer - 선택된 카테고리의 답변을 수정하는 함수
 */
export interface CategoryState {
  category: Category;
  answers: CategoryAnswers;
  selectCategory: (category: Category) => void;
  removeCategory: () => void;
  removeAnswer: () => void;
  updateAnswer: () => void;
  againAnswer: () => void;
}

/**
 * 책 커버 오픈 상태를 관리하는 인터페이스
 *
 * @type {object}
 * @property {boolean} isOpen - 현재 Cover Open 상태
 * @property {Function} setOpen - Cover Open상태 변경하는 함수
 */

export interface BookOpenState {
  isOpen: boolean;
  setOpen: () => void;
  initializeOpenState: () => void;
}
