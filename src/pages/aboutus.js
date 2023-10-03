import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import AboutUs from '@/sections/aboutus/aboutus';
import useTrans from '@/hooks/useTrans';
import { useState } from 'react';


const Page = ({products, aboutus}) => {
  const trans = useTrans()
  const [aboutuss,setAboutus] = useState(aboutus)
  return (
  <>
    <Head>
      <title>
        {trans['About Us']} | MEKONG MARINE SUPPLY CO., LTD
      </title>
    </Head>
    <AboutUs aboutus={aboutuss}/>
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
  const resAbout = await fetch(process.env.API_HOST +'/about-us')
  const jsonAbout = await resAbout.json()
  return { products: json.results, aboutus: jsonAbout.results[0] }
}
export default Page;
