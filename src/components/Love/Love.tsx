'use client';

import { useCategoryStore } from '@/stores/categoryStore';

import TextAll from '../Common/Text/TextAll/TextAll';

const Love = () => {
  const id = useCategoryStore((state) => state.answers.love);
  return <TextAll type={2} title="연애" resultID={id} />;
};

export default Love;
