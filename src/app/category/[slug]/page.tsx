import { PageParams } from '@/models/Params';

interface SlugProp {
  slug: string;
}
const page = ({ params: { slug } }: PageParams<SlugProp>) => {
  return <div>{slug}</div>;
};

export default page;
