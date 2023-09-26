import { useRouter } from 'next/router';
import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Product from '@/sections/products/product';


const Page = () => {
    const router = useRouter    ();
    const { slug } = router.query;
    return(
        <>
            <Head>
            <title>
                A | MEKONG MARINE SUPPLY CO., LTD
            </title>
            </Head>
            <Product parent={'viton_fkm_rubber_packing_sheet'} slug={slug}/>
        </>
    )
};

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page;
