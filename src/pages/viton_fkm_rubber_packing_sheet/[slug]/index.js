import { useRouter } from 'next/router';
import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Product from '@/sections/products/product';
import { convertPath } from '@/layouts/main/top-nav';


const Page = ({products,subProducts}) => {
    const router = useRouter    ();
    const { slug } = router.query;
    const product = products.filter((product) => {return `${convertPath(product.name)}-${product.id_product}` == slug})
    
    const sub = subProducts.filter((p) => {return product[0]?.id_product == p.id_product})
    return(
        <>
            <Head>
            <title>
            {product[0].name} | MEKONG MARINE SUPPLY CO., LTD
            </title>
            </Head>
            <Product parentPath={'/viton_fkm_rubber_packing_sheet'} parentName='Viton/FKM Rubber packing sheet' product={product} subProducts={sub}/>
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
  const res2 = await fetch(process.env.API_HOST +'/sub/list')
  const json2 = await res2.json()
  
  const resFooter = await fetch(process.env.API_HOST +'/webinf/list')
  const jsonFooter = await resFooter.json()
  return { products: json.results, subProducts: json2.results ,footer : jsonFooter.results }
}

export default Page;
