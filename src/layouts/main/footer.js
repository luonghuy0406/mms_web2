import React, { useContext} from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useTrans from "@/hooks/useTrans";
import { LanguageContext } from "@/contexts/context";


function Footer({footer}) {
  const trans = useTrans()
  const { language } = useContext(LanguageContext);
  const ft = footer
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
            item
            container
            xs={12}
            md={6}
          >
            <Grid item xs={12} md={12} sm={12}>
              <Typography
                fontFamily={"var(--font-family-header)"}
                variant="h5"
                gutterBottom
                color="var(--dark-blue)"
                fontWeight="bolder"
              >
                {(trans["Mekong Marine Supply Co., Ltd"])}
              </Typography>
            </Grid>
            <Grid
            container
            item
            xs={12}
            sm={6}
            md={6}
            pr={1}
            pl={1}
            pb={2}
            direction="column"
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              variant="h6"
              gutterBottom
              color="var(--orange)"
              fontWeight="bolder"
            >
              {(trans["HO CHI MINH OFFICE"])}
            </Typography>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon sx={{color:"var(--orange)"}}/>
              <label
                style={{ paddingLeft: "15px" }}
                dangerouslySetInnerHTML={{
                  __html: language == 'vi'? (ft[0]?.adress || ft[0]?.adress_en) : (ft[0]?.adress_en || ft[0]?.adress),
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
              <PhoneIcon style={{ marginBottom: "5px", color:"var(--orange)" }} />
              <label style={{ paddingLeft: "15px" }}>{ft[0]?.phone_num}</label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <EmailIcon style={{ marginBottom: "3px" , color:"var(--orange)"}} />
              <label style={{ paddingLeft: "15px" }}>{ft[0]?.email}</label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FacebookIcon style={{ marginBottom: "3px", color:"var(--orange)" }} />
              <label style={{ paddingLeft: "15px" }}>{ft[0]?.link1}</label>
            </label>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            md={6}
            pr={1}
            pl={1}
            pb={2}
            direction="column"
          >
            <Typography
              fontFamily={"var(--font-family-header)"}
              variant="h6"
              gutterBottom
              color="var(--orange)"
              fontWeight="bolder"
            >
              {(trans["VUNG TAU OFFICE"])}
            </Typography>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon sx={{color:"var(--orange)"}}/>
              <label
                style={{ paddingLeft: "15px" }}
                dangerouslySetInnerHTML={{
                  __html: language == 'vi'? (ft[1]?.adress || ft[1]?.adress_en) : (ft[1]?.adress_en || ft[1]?.adress),
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
              <PhoneIcon style={{ marginBottom: "5px", color:"var(--orange)" }} />
              <label style={{ paddingLeft: "15px" }}>{ft[1]?.phone_num}</label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <YouTubeIcon style={{ marginBottom: "3px" , color:"var(--orange)"}} />
              <label style={{ paddingLeft: "15px" }}>{ft[0]?.link2}</label>
            </label>
            <label
              style={{
                fontFamily: "var(--font-family)",
                color: "var(--dark-blue)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LinkedInIcon style={{ marginBottom: "3px", color:"var(--orange)" }} />
              <label style={{ paddingLeft: "15px" }}>{ft[0]?.link3}</label>
            </label>
          </Grid>
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
          ©2023 Mekong Marine Supply Co., Ltd (MMS), All Rights Reserved.
        </label>
      </div>
    </div>
  );
}

export default Footer;