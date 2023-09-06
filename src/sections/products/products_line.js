import React, { useEffect } from "react";
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
    height: "400px",
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
    height: 400,

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
        backgroundColor: "var(--dark-blue) !important",
      },
      "& span": {
        color: "var(--orange) !important",
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
  
  useEffect(() => {
    if (inView && !$("#product_line_lb").hasClass("animate__fadeInLeft")) {
      $("#product_line_lb").addClass("animate__fadeInLeft");
    }
    if (inView && !$("#product_line_content").hasClass("animate__fadeInRight")) {
      $("#product_line_content").addClass("animate__fadeInRight");
    }
  }, [inView]);
  return (
    <Grid item md={12} sx={{ padding: 0 }}>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid container >
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
                {props.name}
                </Typography>
                <span className={"line-brand"}></span>
            </Grid>
            <Grid
                id="product_line_content"
                container
                classes={{ root: classes.container }}
                pt={5}
                className={"animate__animated animate__delay"}
            >
                {[1,2,3,4].map((item, index) => {
                return (
                    // <Link to={`/product/${item.id}`}>
                    <Grid
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
                            href="#"
                            title=""
                        >
                            <Box position='relative' style={{height:'300px'}}>
                                <Box
                                    className='product-image'
                                    sx={{
                                        width: '100%',
                                        height: '200px',
                                        backgroundImage: 'url(https://pacificpsc.com/static/media/Valve%20&%20Control.b732fd65.png)',
                                        backgroundSize: '80%',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        transition: 'transform .2s linear',
                                        position:'absolute',
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
                                        Product name
                                    </Typography>
                                    </div>
                                    <Typography component="span" fontSize="14px" style={{textDecoration: "underline"}}>
                                    {t("Learn more")}
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
        {t("Contact us")}
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
