import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";


function AboutUs() {
  return (
    <Grid item md={12} sx={{ padding: 0 }}>
      <Container maxWidth="md" sx={{ p: 2 }}>
          <AboutUsContent1 />
      </Container>
    </Grid>
  );
}

export default AboutUs;

const AboutUsContent1 = () => {

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
      <Grid
        item
        id="about_us_content1"
        xs={6}
        className={"animate__animated animate__delay-0.1s"}
      >
        <Typography
          variant="body1"
          pr={5}
          textAlign="justify"
          color={"var(--dark-blue)"}
        >
          {t("About us content")}
        </Typography>
        <Typography
          variant="body1"
          pr={5}
          pt={2}
          textAlign="justify"
          color={"var(--dark-blue)"}
        >
          {t("About us content2")}
        </Typography>
      </Grid>
      <Grid
        item
        id="about_us_image1"
        xs={6}
        className={" animate__animated animate__delay-0.1s"}
      >
        <div style={{ paddingLeft: "40px",position: "relative"}}>
          <div
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "var(--secondary-color)",
              position: "absolute",
              bottom: "30px",
              left: "-5px",
            }}
          ></div>
          {/* <div
            style={{
              position: "absolute",
              width: "50vw",
              height: "100%",
              background: "var(--dark-blue)",
              zIndex: "-1",
              top: "-50px",
              left: "90px",
            }}
          ></div> */}
          <img alt="About us picture" />
        </div>
      </Grid>
    </Grid>
  );
};
