import React, { useEffect } from "react";
import { Container, Grid, Typography, Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";


function Footer() {
  useEffect(()=>{

  },[])
  return (
    <div style={{backgroundColor: 'var(--gray-light)',padding: '20px', paddingTop: '40px'}}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            item
            xs={12}
            md={3}
            pb={2}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              sx={{
                width: { xs: "30%", md: "65%" },
              }}
              src={'./mms_logo.png'}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={4}
            md={3}
            pr={1}
            pl={1}
            pb={2}
            direction="column"
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              variant="h6"
              gutterBottom
              color="var(--dark-blue)"
              fontWeight="bolder"
            >
              HEAD OFFICE
            </Typography>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon />
              <label
                style={{ paddingLeft: "15px" }}
                dangerouslySetInnerHTML={{
                  __html: "16 Yen The St, Ward 2, Tan Binh Dist., HCMC, Viet Nam",
                }}
              ></label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon style={{ marginBottom: "5px" }} />
              <label style={{ paddingLeft: "15px" }}>+84 123 456 789</label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <EmailIcon style={{ marginBottom: "3px" }} />
              <label style={{ paddingLeft: "15px" }}>info@mms.com</label>
            </label>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={4}
            md={3}
            pr={1}
            pl={1}
            pb={2}
            direction="column"
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              variant="h6"
              gutterBottom
              color="var(--dark-blue)"
              fontWeight="bolder"
            >
              VUNG TAU OFFICE
            </Typography>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon />
              <label
                style={{ paddingLeft: "15px" }}
                dangerouslySetInnerHTML={{
                  __html: "D1-2/8 Chi Linh Urban Area, Vung Tau City, Viet Nam",
                }}
              ></label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon style={{ marginBottom: "5px" }} />
              <label style={{ paddingLeft: "15px" }}>+84 123 456 789</label>
            </label>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={4}
            md={3}
            pr={1}
            pl={1}
            direction="column"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.041946147096!2d106.6687727!3d10.8105083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752923abe56be7%3A0xab7e5e456b8a521a!2sC%C3%B4ng%20Ty%20TNHH%20Mekong%20Marine%20Supply!5e0!3m2!1sen!2s!4v1693972632004!5m2!1sen!2s" width="300" height="200" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          height: "auto",
          padding: "10px 20px",
          paddingTop: "40px",
          fontSize: "13px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <label
          style={{
            fontFamily: "var(--font-family)",
            color: "var(--dark-blue)",
            lineHeight: "1.6rem",
            float: "right",
          }}
        >
          ©2023 Mekong Marine Supply Co., Ltd (PPSC), All Rights Reserved.
        </label>
      </div>
    </div>
  );
}

export default Footer;