import Head from 'next/head';
import { Box, Container, Grid, Typography} from '@mui/material';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useInView } from 'react-intersection-observer';
import AboutUs from '@/sections/aboutus/aboutus';
import OurPartner from '@/sections/ourpartner/ourpartner';
import ProductHome from '@/sections/products/product_home';

const Page = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <>
      <Head>
        <title>
          Home | MEKONG MARINE SUPPLY CO., LTD
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
          [1,2,3,4,5].map((id)=>{
            return(
              <Box
                key={'image'+id}
                sx={{
                  display: "block",
                  margin: "auto",
                  width: "100%",
                  backgroundImage:
                    'url("https://static.wixstatic.com/media/3eafc0_3698a0af068d45d6801f98a73da081a6~mv2.jpg/v1/fill/w_1198,h_874,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/3eafc0_3698a0af068d45d6801f98a73da081a6~mv2.jpg")',
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
      <AboutUs/>
      <OurPartner/>
      <Grid item md={12} sx={{ padding: 0 }}>
        <Container maxWidth="md" sx={{ p: 2 }}>
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
                Products
                </Typography>
                <span className={"line-brand"}></span>
            </Grid>
            <ProductHome/>
            <ProductHome reverse={true}/>
            <ProductHome/>
            <ProductHome reverse={true}/>
            <ProductHome/>
          </Grid>
        </Container>
      </Grid>
     
    </>
  )};

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page;
