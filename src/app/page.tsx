import fetcher from '@/common/utils/fetcher';
import ExamplePage from '@/modules/ExamplePage/page';

export default async function Home() {
  const getData = await fetcher<any, any>({
    path: '/users',
    isExternal: true,
  });

  console.log(getData);

  return <ExamplePage />;
}
