import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import AboutUs from '@/sections/aboutus/aboutus';


const Page = () => (
  <>
    <Head>
      <title>
        About Us | MEKONG MARINE SUPPLY CO., LTD
      </title>
    </Head>
    <AboutUs/>
  </>
);

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page;
