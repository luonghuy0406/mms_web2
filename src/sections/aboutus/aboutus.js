import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function AboutUs() {
  return (
    <Grid item md={12} sx={{ padding: 0 }}>
      <Container maxWidth="md" sx={{ p: 2 }}>
          <AboutUsContent />
      </Container>
    </Grid>
  );
}

export default AboutUs;

const AboutUsContent = () => {

  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
//   useEffect(() =>{
//     if(inView && !$("#content_lb1").hasClass("animate__fadeInLeft")){
//       $("#content_lb1").addClass("animate__fadeInLeft")
//     }
//     if(inView && !$("#about_us_content1").hasClass("animate__fadeInLeft")){
//       $("#about_us_content1").addClass("animate__fadeInLeft")
//     }
//     if(inView && !$("#about_us_image1").hasClass("animate__fadeInRight")){
//       $("#about_us_image1").addClass("animate__fadeInRight")
//     }
//   },[inView])
  return (
    <Grid container ref={ref}>
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
          {t("ABOUT US")}
        </Typography>
        <span className={"line-brand"}></span>
      </Grid>
      <Grid item md={6} lg={5} container spacing={3} sx={{alignItems: 'center'}}>
        <Grid item xs={6}>
            <Stack sx={{mb:2}}>
              <Box
                sx={{
                  textAlign: 'center'
                }}
              >
                <img
                  alt="Under development"
                  src="https://placehold.co/450x500"
                  style={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    width: 400,
                    borderRadius: '10px'
                  }}
                />
              </Box>
            </Stack>
            <Stack>
              <Box
                sx={{
                  textAlign: 'center'
                }}
              >
                <img
                  alt="Under development"
                  src="https://placehold.co/450x500"
                  style={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    width: 400,
                    borderRadius: '10px'
                  }}
                />
              </Box>
            </Stack>
        </Grid>
        <Grid item xs={6}>
            <Stack>
              <Box
                sx={{
                  textAlign: 'center'
                }}
              >
                <img
                  alt="Under development"
                  src="https://placehold.co/450x600"
                  style={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    width: 400,
                    borderRadius: '10px'
                  }}
                />
              </Box>
            </Stack>
        </Grid>
      </Grid>
      <Grid item md={6} lg={7} direction='row' container sx={{alignItems: 'center',pl:7}}>
          <Stack >
            <Stack direction='row' sx={{alignItems: 'center'}}>
              <Stack direction='row' sx={{alignItems: 'baseline'}}>
                <Typography variant="h2" color='var(--dark-blue)' fontWeight='bolder'>
                    20
                </Typography>
                <Typography variant="h4" color='var(--dark-blue)' fontWeight='bolder'>
                    +
                </Typography>
              </Stack>
              <Stack sx={{alignItems: 'baseline',pl:2}}>
                <Typography variant="h7" color='var(--light-blue)'>
                  Years
                </Typography>
                <Typography variant="h7" color='var(--light-blue)'>
                  Experience
                </Typography>
              </Stack>
            </Stack>
            <Stack spacing={2} sx={{pt:2}}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              </Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </Stack>
          </Stack>
      </Grid>

      <Grid item xs={12} sx={{pt:3}}>
        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={2000}
            customTransition="all 0.5s linear"
            centerMode={false}
            className=""
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
                    items: 5,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 4,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 4,
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
                <Box sx={{p:2}}>
                    <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="400"/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://logohistory.net/wp-content/uploads/2022/10/Facebook-Logo.svg" width="400"/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://www.meilleure-innovation.com/wp-content/uploads/2022/04/logo-instagram.png" width="400"/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://cdn.sanity.io/images/kts928pd/production/8f4940ab2b110be46a20fe7efd88e9826c801ce7-3840x2160.png" width="400"/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="400"/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://logohistory.net/wp-content/uploads/2022/10/Facebook-Logo.svg" width="400"/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://www.meilleure-innovation.com/wp-content/uploads/2022/04/logo-instagram.png" width="400"/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://cdn.sanity.io/images/kts928pd/production/8f4940ab2b110be46a20fe7efd88e9826c801ce7-3840x2160.png" width="400"/>
                </Box>
        </Carousel>
      </Grid>
    </Grid>
  );
};
