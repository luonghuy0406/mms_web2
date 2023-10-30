
import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Typography} from '@mui/material';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useInView } from 'react-intersection-observer';
import AboutUs from '@/sections/aboutus/aboutus';
import OurPartner from '@/sections/ourpartner/ourpartner';
import ProductHome from '@/sections/products/product_home';
import useTrans from '../hooks/useTrans';
import axios from 'axios';
import { LanguageContext } from '@/contexts/context';


const Page = ({ products, banners,aboutus, footer, customer }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { language } = useContext(LanguageContext);
  const trans = useTrans()
  return (
    <>
      <Head>
        <title>
          {trans['Home']} | MEKONG MARINE SUPPLY CO., LTD
        </title>
      </Head>
      <Box
        ref={ref}
        className={"animate__animated animate__delay-0.1s"}
        sx={{
          paddingBottom: '30px',
          position: 'relative',
          maxHeight:{
            xs: '200px',
            md: '400px',
            xl: '600px'
          }
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          customTransition="all 0.5s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
      {
          banners.map((image)=>{
            return(
              <Box
                key={'image'+image.id_bn}
                sx={{
                  display: "block",
                  margin: "auto",
                  width: "100%",
                  backgroundImage:`url("${process.env.API_HOST}/read_image/${image.link}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height:{
                    xs: '200px',
                    md: '400px',
                    xl: '600px'
                  }
                }}
              />

            )
          })
          }
          
        </Carousel>
      </Box>
      <AboutUs products ={products} aboutus ={aboutus}/>
      <OurPartner customer={customer}/>
      <Grid item md={12} sx={{ padding: 0 }}>
        <Container maxWidth="xl" sx={{ p: 2 }}>
          <Grid container >
            <Grid
                id="content_lb1"
                item
                xs={12}
                md={12}
                sx={{ padding: {xs:"10px 0 !important" ,md:"20px 0 !important"}, fontSize: "22px" }}
                className={"animate__animated animate__delay-0.1s"}
            >
                <Typography
                fontFamily={"var(--font-family-header)"}
                variant="h4"
                component="h4"
                sx={{ color: "var(--dark-blue)" }}
                fontWeight="bolder"
                >
                {trans['Products']}
                </Typography>
                <span className={"line-brand"}></span>
            </Grid>
            
          </Grid>
          {
            products?.map((product,index)=>{
              return <ProductHome key={product.name+index} product={product} language={language} reverse={index%2==0}/>
            })
          }
        </Container>
      </Grid>
     
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
  const resBanner = await fetch(process.env.API_HOST +'/banner/list')
  const jsonBanner = await resBanner.json()
  
  const resAbout = await fetch(process.env.API_HOST +'/about-us')
  const jsonAbout = await resAbout.json()
  const resFooter = await fetch(process.env.API_HOST +'/webinf/list')
  const jsonFooter = await resFooter.json()
  const resPartner = await fetch(process.env.API_HOST +'/customer/list')
  const jsonPartner = await resPartner.json()
  return { products: json.results, banners : jsonBanner.results, aboutus: jsonAbout.results, footer: jsonFooter.results, customer: jsonPartner.results }
}
 
export default Page
