import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Products from '@/sections/products/products_line';


const Page = ({products}) => {
  const childs = products.filter((product) => {return product.id_group == '3'})
  return (
  <>
    <Head>
      <title>
        Viega Pipe Fitings | MEKONG MARINE SUPPLY CO., LTD
      </title>
    </Head>
    <Products name='Viega Pipe Fitings' path={'viega_pipe_fittings'} childs={childs}/>
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
  
  const resFooter = await fetch(process.env.API_HOST +'/webinf/list')
  const jsonFooter = await resFooter.json()
  return { products: json.results,footer : jsonFooter.results }
}
export default Page;
