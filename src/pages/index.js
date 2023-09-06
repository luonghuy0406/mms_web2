import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as MainLayout} from 'src/layouts/main/layout';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Page = () => (
  <>
    <Head>
      <title>
        Home | MEKONG MARINE SUPPLY CO., LTD
      </title>
    </Head>
    <Box
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

  </>
);

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Page;
