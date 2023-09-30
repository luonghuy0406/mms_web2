import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import News from '@/sections/news/news';
import useTrans from '@/hooks/useTrans';


const Page = ({products, posts}) => {
  const trans = useTrans()
  return (
    <>
      <Head>
        <title>
        {trans['News and Event']} | MEKONG MARINE SUPPLY CO., LTD
        </title>
      </Head>
      <News name={trans['News and Event']} path='news' posts={posts}/>
    </>
  )
};

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

Page.getInitialProps = async (ctx) => {
  const res = await fetch(process.env.API_HOST +'/product/list')
  const json = await res.json()
  const resPosts = await fetch(process.env.API_HOST +'/post/list')
  const jsonPosts = await resPosts.json()
  return { products: json.results, posts : jsonPosts.results }
}
export default Page;
