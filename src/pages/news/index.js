import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import News from '@/sections/news/news';


const Page = () => (
  <>
    <Head>
      <title>
        News and Events | MEKONG MARINE SUPPLY CO., LTD
      </title>
    </Head>
    <News name="News and Events" path='news'/>
  </>
);

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page;
