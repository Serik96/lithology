import { getDictionary } from '@/config/dictionaries';
import { RootLayoutProps } from '@/interfaces';

const Main = async ({ params: { lang } }: RootLayoutProps) => {
  const dict = await getDictionary(lang);

  return <div>{dict.footer.heading}</div>;
};
export default Main;
