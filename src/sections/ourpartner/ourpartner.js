import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function OurPartner() {
  return (
    <Grid item md={12} sx={{ padding: 0 }}>
      <Container maxWidth="md" sx={{ p: 2 }}>
          <OurPartnerContent />
      </Container>
    </Grid>
  );
}

export default OurPartner;

const OurPartnerContent = () => {

  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
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
          {t("OUR PARTNER")}
        </Typography>
        <span className={"line-brand"}></span>
      </Grid>
      <Grid item xs={12}>
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
                <Box sx={{p:2}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/CMA_CGM_logo.svg/1200px-CMA_CGM_logo.svg.png" style={{width:"300px"}}/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/COSCO_logo.svg/2560px-COSCO_logo.svg.png" style={{width:"300px"}}/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ocean_Network_Express_logo.svg/2560px-Ocean_Network_Express_logo.svg.png" style={{width:"300px"}}/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/CMA_CGM_logo.svg/1200px-CMA_CGM_logo.svg.png" style={{width:"300px"}}/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/COSCO_logo.svg/2560px-COSCO_logo.svg.png" style={{width:"300px"}}/>
                </Box>
                <Box sx={{p:2}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ocean_Network_Express_logo.svg/2560px-Ocean_Network_Express_logo.svg.png" style={{width:"300px"}}/>
                </Box>
            </Carousel>
      </Grid>
    </Grid>
  );
};
