import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import AboutUs from '@/sections/aboutus/aboutus';
import useTrans from '@/hooks/useTrans';


const Page = ({products}) => {
  const trans = useTrans()
  return (
  <>
    <Head>
      <title>
        {trans['About Us']} | MEKONG MARINE SUPPLY CO., LTD
      </title>
    </Head>
    <AboutUs/>
  </>
)};

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

Page.getInitialProps = async (ctx) => {
  const res = await fetch(process.env.API_HOST +'/product/list')
  const json = await res.json()
  return { products: json.results }
}
export default Page;
