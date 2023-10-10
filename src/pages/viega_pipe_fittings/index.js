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
  const res = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/product/list')
  const json = await res.json()
  
  const resFooter = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/webinf/list')
  const jsonFooter = await resFooter.json()
  return { products: json.results,footerDetail : jsonFooter.results }
}
export default Page;
