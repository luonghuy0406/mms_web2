import React, { useEffect, useRef } from "react";
import $ from 'jquery'
import {
  Grid,
  Container,
  CardContent,
  Card,
  Typography,
  useTheme,
  Box,
} from "@mui/material";
import 'animate.css'
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useInView } from "react-intersection-observer";
// import { dataProducts } from "./data";
import { makeStyles } from "@material-ui/core";
import Link from "next/link";
import { convertPath } from "@/layouts/main/top-nav";

const useStyles = makeStyles((props) => ({
  container: {
    width: "calc(100%) !important",
    marginLeft: "0 !important",
  },
  root: {
    flexDirection: "column",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  boxContent: {
    height: "auto",
    aspectRatio: 1,
    backgroundColor: "#f5f5f5",
    color: "var(--dark-blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transition: "all .2s linear",
  },
  boxImage: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "200%",
    transition: "background-size .3s linear",
  },
  content: {
    fontFamily: "var(--font-family) !important",
    textAlign:"center",
    "@media (max-width:600px)": {
      fontSize: "15px !important",
    },
    "@media (min-width:600px)": {
      fontSize: "17px !important",
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
  card: {
    borderRadius: "0 !important",
    boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.2) !important",
    backgroundColor: "var(--background-gray) !important",
    color: "var(--dark-blue) !important",
    transition: "all .2s linear !important",
    cursor: "pointer",
    "&:hover": {
      "& .card-content-hover":{
        backgroundColor: "var(--orange) !important",
      },
      "& span": {
        color: "white !important",
      },
      "& h6": {
        color: "white !important"
      },
      "& .product-image": {
        transform: 'scale(1.1)',
        transition: 'transform .2s linear',
      },
    },
  },
  button: {
    "&:hover": {
      color: "var(--orange)",
    },
  },
}));

function Products(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const { ref, inView } = useInView({
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
    <Grid item md={12} sx={{ padding: 0 }}>
      <Container ref={ref} maxWidth="md" sx={{ p: 2 }}>
        <Grid container >
            <Grid
                ref={headerRef}
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
                {props.name}
                </Typography>
                <span className={"line-brand"}></span>
            </Grid>
            <Grid
                ref={productRef}
                container
                classes={{ root: classes.container }}
                pt={3}
                className={"animate__animated animate__delay"}
            >
                {props.childs.map((item, index) => {
                return (
                    // <Link to={`/product/${item.id}`}>
                    <Grid
                      key={`${convertPath(item.name)}-${item.id_product}`}
                      item
                      sx={{p:2}}
                      xs={12}
                      sm={6}
                      md={4}
                      container
                    >
                    <Grid item xs={12}>
                    <Card className={classes.card}>
                        <Link
                            className={classes.inner}
                            href={`/${props.path}/${convertPath(item.name)}-${item.id_product}`}
                            title=""
                        >
                            <Box position='relative' style={{height:'auto', aspectRatio: 0.75, display:'flex', justifyContent:'center'}}>
                                <Box
                                    className='product-image'
                                    sx={{
                                        width: '85%',
                                        height: 'auto',
                                        aspectRatio: 1,
                                        backgroundImage: `url(${process.env.API_HOST}/read_image/${item.image})`,
                                        backgroundSize: '80%',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        transition: 'transform .2s linear',
                                        position:'absolute',
                                        margin:"20px"
                                    }}
                                >
                                        
                                </Box>
                                <Box
                                    position='absolute'
                                    bottom={0}
                                    sx={{
                                        p:2,
                                        width:'100%',
                                        backgroundColor:"white",
                                        color:"var(--dark-blue)"
                                    }}
                                    classes={{ root: classes.content }} className="card-content-hover"
                                >
                                    <div style={{minHeight:"60px"}}>
                                    <Typography gutterBottom variant="h6" style={{ textTransform: 'uppercase' }}>
                                        {item.name}
                                    </Typography>
                                    </div>
                                    <Typography component="span" fontSize="14px" style={{textDecoration: "underline"}}>
                                    Learn more
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                        </Card>
                    </Grid>
                    </Grid>
                    // </Link>
                );
                })}
            </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Products;


const FormContact = () => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={classes.button}
      >
        Contact us
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
