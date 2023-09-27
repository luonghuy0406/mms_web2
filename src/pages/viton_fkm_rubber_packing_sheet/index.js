import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Products from '@/sections/products/products_line';


const Page = () => (
  <>
    <Head>
      <title>
        Viton/fkm rubber packing sheet | MEKONG MARINE SUPPLY CO., LTD
      </title>
    </Head>
    <Products name='Viton/fkm rubber packing sheet' path={'viton_fkm_rubber_packing_sheet'}/>
  </>
);

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page;
