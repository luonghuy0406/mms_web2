import { Box, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import $ from 'jquery'
import 'animate.css';
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useTrans from "@/hooks/useTrans";


function OurPartner({customer}) {
  return (
    <Grid item md={12} sx={{ padding: 0 }}>
      <Container maxWidth="md" sx={{ p: 2 }}>
          <OurPartnerContent customer={customer}/>
      </Container>
    </Grid>
  );
}

export default OurPartner;

const OurPartnerContent = ({customer}) => {
  console.log("customer",customer)
  const trans = useTrans()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() =>{
    if(inView && !$("#ourpartner_header").hasClass("animate__fadeInLeft")){
      $("#ourpartner_header").addClass("animate__fadeInLeft")
    }
    if(inView && !$("#ourpartner_image").hasClass("animate__fadeInRight")){
      $("#ourpartner_image").addClass("animate__fadeInRight")
    }
  },[inView])
  return (
    <Grid container ref={ref}>
      <Grid
        id="ourpartner_header"
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
          {trans["Our Partner"]}
        </Typography>
        <span className={"line-brand"}></span>
      </Grid>
      <Grid item xs={12} id="ourpartner_image"  className={"animate__animated animate__delay-0.1s"}>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            customTransition="all 0.5s linear"
            containerClass="container-with-dots"
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
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
              {
                customer?.map((cus)=>{
                  return (
                    <Box key={'cus-'+cus.id} sx={{p:2,height:"100%", display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <CardMedia
                          component="img"
                          sx={{ width: 300,textAlign: "center" }}
                          image={`${process.env.API_HOST}/read_image/${cus.image}`}
                          alt={cus.name} 
                      />
                    </Box>
                  )
                })
              }
                
            </Carousel>
      </Grid>
    </Grid>
  );
};
