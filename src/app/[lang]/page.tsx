import { getDictionary } from '@/app/[lang]/dictionaries';
import { RootLayoutProps } from '@/interfaces/RootLayoutProps';


const Main = async ({ params: { lang } }: RootLayoutProps) => {


  const dict = await getDictionary(lang)
  // console.log(dict)

  return <div>{dict.footer.heading}</div>;
};
export default Main;
