import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Products from '@/sections/products/products_line';


const Page = ({products}) => {
  const childs = products.filter((product) => {return product.id_group == '2'})
  return (
    <>
      <Head>
        <title>
          Auxiliary Machiery | MEKONG MARINE SUPPLY CO., LTD
        </title>
      </Head>
      <Products name='Auxiliary Machiery' path={'auxiliary_machinery'} childs={childs}/>
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
