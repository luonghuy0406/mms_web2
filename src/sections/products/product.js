import {
    Box,
    Container,
    Divider,
    Grid,
    Typography,
    useTheme,
    Breadcrumbs,
  } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "react-multi-carousel/lib/styles.css";
import ArticleIcon from "@mui/icons-material/Article";
import { makeStyles } from "@material-ui/core";
import Link from "next/link";
import { LanguageContext } from "@/contexts/context";
import SubProduct from "./sub_product";
import useTrans from "@/hooks/useTrans";
import SendMail from "./send_mail";

  const useStyles = makeStyles(() => {
    const theme = useTheme();
    return {
      container: {
        width: "calc(100%)  !important",
        marginLeft: "0 !important",
      },
      background: {
        "&:hover": {
          filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
          zIndex: "1",
          backgroundColor: "var(--dark-blue)",
          transition: "background-color .2s linear !important",
          "& img": {
            [theme.breakpoints.down("sm")]: {
              width: "65%",
              transition: "width .3s linear !important",
            },
            [theme.breakpoints.up("md")]: {
              width: "95%",
              transition: "width .3s linear !important",
            },
          },
        },
      },
      button: {
        backgroundColor: "var(--dark-blue) !important",
        fontWeight: "bold !important",
        padding: "10px 15px !important",
        "&:hover": {
          backgroundColor: "var(--orange) !important",
        },
      },
    };
  });
  
  function Product(props) {
    const { language } = useContext(LanguageContext);
    const trans = useTrans()
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const classes = useStyles();
    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
    });
    
  const headerRef = useRef()
  const productRef = useRef()
  useEffect(() =>{
    if(inView && !headerRef.current.classList.contains('animate__fadeInLeft')){
        headerRef.current.classList.add("animate__fadeInLeft")
    }
    if(inView && !productRef.current.classList.contains('animate__fadeInRight')){
      productRef.current.classList.add("animate__fadeInRight")
  }
  },[inView])
    return (
      <Grid item md={12} ref={ref}  sx={{ padding: { xs: "15px 0", md: "30px 0" },paddingBottom:"0 !important"}}>
        <Container maxWidth="md" sx={{ p: 2 }}>
          <div 
              ref={headerRef}
              className={"animate__animated animate__delay-0.1s"}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href='/' underline="hover" style={{ textDecoration: "none", color: "gray" }}>
                {trans['Home']}
              </Link>
              <Link href={`${props.parentPath}`} underline="hover" style={{ textDecoration: "none", color: "gray" }}>
                {props.parentName}
              </Link>
              <Typography color="var(--orange)">
                {props.product[0].name}
              </Typography>
            </Breadcrumbs>
            <div
              // id={"lb-" + secondId}
              style={{ display: "flex", padding: "50px 0" }}
            >
              <div
                style={{
                  marginTop: "2px",
                  minWidth: "30px",
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                  backgroundColor: "var(--light-blue)",
                }}
              ></div>
              <Typography
                fontFamily={"var(--font-family-header)"}
                color={"var(--dark-blue)"}
                variant="h4"
                component="h4"
                fontWeight="bolder"
                // lineHeight={0}
              >
                {language =='vi'? (props.product[0].name || props.product[0].name_en) : (props.product[0].name_en || props.product[0].name)}
              </Typography>
            </div>
          </div>
          <Grid
            container
            classes={{ root: classes.container }}
            ref={productRef}
            className={"animate__animated animate__delay-0.1s"}
          >
            <Grid item xs={12} md={5} sx={{ textAlign: "center" }} p={1}>
              <Box
                component="div"
                sx={{
                  width: "100%",
                  height: {xs:"fit-content", md:"100%"},
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.2)",
                  position: "relative",
                  padding:"10px"
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: { xs: "100%", md: "100%" },
                    aspectRatio: "1",
                    objectFit: "contain",
                  }}
                  src={`${process.env.API_HOST}/read_image/${props.product[0].image}`}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={7} container sx={{paddingLeft:{xs:"0",md:"20px"}}}>
              <Grid item xs={12} sx={{ textAlign: "justify" }}>
                <Typography
                  color={"var(--dark-blue)"}
                  fontFamily={"var(--font-family-header)"}
                  variant="h6"
                  component="h6"
                  fontWeight="bolder"
                  pb={2}
                  pl={2}
                  sx={{ textTransform: "uppercase" }}
                >
                  {trans['Descriptions']}
                </Typography>
                <Divider />
                <Box p={2} className='ck-content'>
                  <label
                    style={{
                      color: "var(--black)",
                      fontFamily: "var(--font-family)",
                    }}
                    dangerouslySetInnerHTML={{ __html: language =='vi'? (props.product[0].des || props.product[0].des_en) : (props.product[0].des_en || props.product[0].des) }}
                  ></label>
                </Box>
                <Box p={2} className='ck-content'>
                  {props.product[0].brochure && (
                    <label
                      style={{
                        color: "var(--orange)",
                        fontFamily: "var(--font-family)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ArticleIcon style={{ paddingBottom: "3px" }} />{" "}
                      <a
                        href={props.product[0].brochure}
                        style={{ paddingLeft: "10px" }}
                        target="_blank"
                      >
                        {trans['Product brochure']}
                      </a>
                    </label>
                  )}
                </Box>
                <SendMail
                  id={props.product[0].id_product}
                  pr_name={props.product[0].name}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl" sx={{ p: 2 }}>
          <Grid container sx={{pt:2}}>
                {
                props.subProducts.map((sub) => {
                return (
                      <Grid
                        key={sub.name}
                        item
                        sx={{p:2}}
                        xs={12}
                        sm={6}
                        md={4}
                        container
                        justifyContent={"center"}
                      >
                        <SubProduct product={sub}/>
                      </Grid>
                )})
              }
            </Grid>
        </Container>
      </Grid>
    );
  }
  
  export default Product;