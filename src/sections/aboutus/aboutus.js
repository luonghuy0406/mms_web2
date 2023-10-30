import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import 'animate.css';
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import $ from 'jquery'
import "react-multi-carousel/lib/styles.css";
import useTrans from "@/hooks/useTrans";
import { LanguageContext } from "@/contexts/context";

function AboutUs(props) {
  return (
    <Grid item md={12} sx={{ padding: 0 }}>
      <Container maxWidth="md" sx={{ p: 2 }}>
          <AboutUsContent aboutus={props.aboutus}/>
      </Container>
    </Grid>
  );
}

export default AboutUs;

const AboutUsContent = (props) => {
  const { language } = useContext(LanguageContext);
  const trans = useTrans()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() =>{
    if(inView && !$("#aboutus_header").hasClass("animate__fadeInLeft")){
      $("#aboutus_header").addClass("animate__fadeInLeft")
    }
    if(inView && !$("#aboutus_image").hasClass("animate__fadeInLeft")){
      $("#aboutus_image").addClass("animate__fadeInLeft")
    }
    if(inView && !$("#aboutus_content").hasClass("animate__fadeInRight")){
      $("#aboutus_content").addClass("animate__fadeInRight")
    }
    if(inView && !$("#aboutus_brand").hasClass("animate__fadeInRight")){
      $("#aboutus_brand").addClass("animate__fadeInRight")
    }
  },[inView])
  return (
    <Grid container ref={ref}>
      <Grid
        id="aboutus_header"
        item
        xs={12}
        md={12}
        sx={{ padding: {xs:"10px 0 !important" ,md:"20px 0 !important"}, fontSize: "22px" }}
        className={"animate__animated animate__delay-0.1s "}
      >
        <Typography
          fontFamily={"var(--font-family-header)"}
          variant="h4"
          component="h4"
          sx={{ color: "var(--dark-blue)" }}
          fontWeight="bolder"
        >
          {trans['About Us']}
        </Typography>
        <span className={"line-brand"}></span>
      </Grid>
      <Grid  id="aboutus_image" className={"animate__animated animate__delay-0.1s "} item md={6} lg={5} container spacing={3} sx={{alignItems: 'center'}}>
        <Grid item xs={6}>
            <Stack sx={{mb:2}}>
              <Box
                sx={{
                  textAlign: 'center'
                }}
              >
                <img
                  alt="Under development"
                  src={`${process.env.API_HOST}/read_image/${props.aboutus?.image1}`}
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
                  src={`${process.env.API_HOST}/read_image/${props.aboutus?.image2}`}
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
                  src={`${process.env.API_HOST}/read_image/${props.aboutus?.image3}`}
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
      <Grid  id="aboutus_content" className={"animate__animated animate__delay-0.1s "} item md={6} lg={7} direction='row' container sx={{alignItems: 'center',pl:7}}>
          <Stack >
            {/* <Stack direction='row' sx={{alignItems: 'center'}}>
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
            </Stack> */}
            <Stack spacing={2} sx={{pt:2}}>
              <div className='ck-content' dangerouslySetInnerHTML={{__html:language =='vi'? (props.aboutus?.content || props.aboutus?.content_en) : (props.aboutus?.content_en || props.aboutus?.content)}}/>
            </Stack>
          </Stack>
      </Grid>
    </Grid>
  );
};
