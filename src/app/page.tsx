import fetcher from '@/common/utils/fetcher';
import MainPage from '@/modules/MainPage/page';

export default async function Home() {
  const getData = await fetcher<any, any>({
    path: '/users',
    isExternal: true,
  });

  console.log(getData);

  return <MainPage />;
}
