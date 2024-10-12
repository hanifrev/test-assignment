import MainPage from '@/modules/MainPage/page';
import { mainPageType } from '@/modules/MainPage/types/mainPage.models';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

const getData = async () => {
  const response = await fetch(`${BASE_URL}/api/mainPage`);

  if (!response.ok) {
    throw new Error('ERROR while getting data');
  }

  const result = await response.json();
  return result;
};

export default async function Home() {
  if (!BASE_URL) {
    return null;
  }

  const data: mainPageType = await getData();

  console.log(data);

  //@ts-ignore
  return <MainPage data={data} />;
}
