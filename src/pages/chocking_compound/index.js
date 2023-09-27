import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Products from '@/sections/products/products_line';


const Page = () => (
  <>
    <Head>
      <title>
        Chocking Compound | MEKONG MARINE SUPPLY CO., LTD
      </title>
    </Head>
    <Products name='Chocking Compound' path={'chocking_compound'} />
  </>
);

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page;
