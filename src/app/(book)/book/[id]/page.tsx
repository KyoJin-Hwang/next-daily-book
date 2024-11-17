import { PageParams } from '@/models/Params';

interface IDProp {
  id: string;
}
const page = ({ params: { id } }: PageParams<IDProp>) => {
  return <div>{id}</div>;
};

export default page;
