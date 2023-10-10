import {Box, Container, Divider, Grid, Typography, useTheme } from "@mui/material";
import $ from 'jquery'
import 'animate.css';
import React, { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "react-multi-carousel/lib/styles.css";
import ArticleIcon from "@mui/icons-material/Article";
import { makeStyles } from "@material-ui/core";
import useTrans from "@/hooks/useTrans";
import { LanguageContext } from "@/contexts/context";

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

function ProductHome(props) {
    const { language } = useContext(LanguageContext);
    const trans = useTrans()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const classes = useStyles();
    const productRef = useRef() 
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    useEffect(() =>{
        if(inView && props.reverse && !productRef.current.classList.contains('animate__fadeInLeft')){
            productRef.current.classList.add("animate__fadeInLeft")
        }else if(inView  && !productRef.current.classList.contains('animate__fadeInRight')){
            productRef.current.classList.add("animate__fadeInRight")
        }
    },[inView])
    return (
        <Grid item md={12} ref={ref}  sx={{ padding: { xs: "15px 0", md: "30px 0" },paddingBottom:"0 !important"}}>
            <Container maxWidth="md" sx={{ p: 2 }}>
                <Grid
                    ref={productRef}
                    direction={props.reverse ? 'row-reverse' : 'row'}
                    container
                    classes={{ root: classes.container }}
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
                        }}
                        >
                        <Box
                            component="img"
                            sx={{
                            width: { xs: "60%", md: "90%" },
                            aspectRatio: " 3/2",
                            objectFit: "contain",
                            }}
                            // src={'https://1454-183-80-32-33.ngrok-free.app' +'/read_image/'+props.product.image}
                            src={'https://s3.eu-central-1.wasabisys.com/rta-rtcloud/file_1696925420874.jpg'}
                            
                        />
                        {/* <Box
                            component="img"
                            sx={{
                            width: { xs: "70px", md: "100px" },
                            position: "absolute",
                            padding: "10px",
                            top: "0",
                            left: "0",
                            }}
                            src={logoBrand}
                        /> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} container sx={{paddingLeft:{xs:"0",md:"20px"}}}>
                        <Grid item xs={12} sx={{ textAlign: "justify" }}>
                        <Typography
                            color={"var(--dark-blue)"}
                            fontFamily={"var(--font-family-header)"}
                            variant="h5"
                            component="h5"
                            fontWeight="bolder"
                            pb={2}
                            sx={{ textTransform: "uppercase" }}
                        >
                            {language =='vi'? (props.product.name || props.product.name_en) : (props.product.name_en || props.product.name)}
                        </Typography>
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
                                dangerouslySetInnerHTML={{ __html: props.language =='vi'? (props.product.des || props.product.des_en) : (props.product.des_en || props.product.des)}}
                            ></label>
                        </Box>

                        {/* <Typography
                            color={"var(--dark-blue)"}
                            fontFamily={"var(--font-family-header)"}
                            variant="h6"
                            component="h6"
                            fontWeight="bolder"
                            pb={2}
                        >
                            SPECIFICATION
                        </Typography>
                        <Divider /> */}
                        <Box p={2} className='ck-content'>
                            {/* <label
                                style={{
                                    color: "var(--black)",
                                    fontFamily: "var(--font-family)",
                                }}
                                dangerouslySetInnerHTML={{ __html: props.language =='vi'? props.product.spec : props.product.spec_en }}
                            ></label>
                            <br />
                            <br /> */}
                            {/* {data.brochue && ( */}
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
                                    href={props.product.brochue}
                                    style={{ paddingLeft: "10px" }}
                                    target="_blank"
                                >
                                {trans['Product brochure']}
                                </a>
                            </label>
                            {/* )} */}
                        </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider/>
        </Grid>
    );
}

export default ProductHome;