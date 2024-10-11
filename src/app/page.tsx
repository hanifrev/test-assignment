import fetcher from '@/common/utils/fetcher';
import MainPage from '@/modules/MainPage/page';
import { mainPageType } from '@/modules/MainPage/types/mainPage.models';

export default async function Home() {
  const getData = await fetcher<mainPageType>({
    path: '/mainPage',
    isExternal: false,
  });

  console.log(getData);

  return <MainPage data={getData} />;
}
