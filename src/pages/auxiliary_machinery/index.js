import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Products from '@/sections/products/products_line';


const Page = () => {
  return (
    <>
      <Head>
        <title>
          Auxiliary Machiery | MEKONG MARINE SUPPLY CO., LTD
        </title>
      </Head>
      <Products name='Auxiliary Machiery'/>
    </>
  )};

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page;
