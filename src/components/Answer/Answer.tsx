'use client';

import { useSearchParams } from 'next/navigation';

const Answer = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  console.log(search?.split(','));

  return <div></div>;
};

export default Answer;
