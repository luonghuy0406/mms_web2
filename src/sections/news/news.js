import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Container,
  CardContent,
  Card,
  Typography,
  useTheme,
  Box
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
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { dataProducts } from "./data";

const useStyles = makeStyles((theme) => ({
    card: {
      display: 'flex',
      flexDirection: 'column'
    },
    cardNew: {
      display: 'flex',
      flexDirection: 'column',
      transition: 'all .2s linear',
      "&:hover": {
        "&.newsImage" : {
          transform: 'scale(1.2)'
        },
        "&.newsTypo": {
          color: 'var(--orange)'
          
        },
        "&.newsButton":{
          color: 'var(--dark-blue)',
          backgroundColor:'var(--orange)'
        }
      }
    },
    img: {
      width: 2560,
      height: 1285,
      objectFit: 'cover',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(1),
      color: '#fff',
    },
    date: {
      marginBottom: theme.spacing(1),
    },
    name: {
      fontSize: 15,
      fontWeight: 600,
    },
  }));

function News(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  
  return (
    <Grid item md={12} sx={{ padding: 0 }}>
      <Container maxWidth="md" sx={{ p: 2 }}>
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
                    {props.name}
                </Typography>
            <span className={"line-brand"}></span>
            </Grid>
            <Grid
                container spacing={2}
                className={"animate__animated animate__delay"}
            >
                <Grid item xs={12}>
                    <NewestPost/>
                </Grid>
                <Grid item xs={6}>
                    <PostCard/>
                </Grid>
                <Grid item xs={6}>
                    <PostCard/>
                </Grid>
                <Grid item xs={6}>
                    <PostCard/>
                </Grid>
                <Grid item xs={6}>
                    <PostCard/>
                </Grid>


            </Grid>
        </Grid>
      </Container>
    </Grid>
    
  );
}

export default News;

const NewestPost = ()=>{
  const classes = useStyles();
  return(
    <Box className={classes.cardNew}> 
      <Link
        className={classes.inner}
        href="/news/1"
        title="NEWTECONS TỔ CHỨC CHUỖI HOẠT ĐỘNG CHÀO MỪNG NGÀY TRUYỀN THỐNG 2023"
      >
          <Grid
            container
          >
            <Grid item xs={4}>
            <Box 
              classes={classes.newsTypo}
              sx={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                textAlign: 'center',
                justifyContent: 'center',  
                p:5,
                position: 'relative'
              }}
            >
                
                <Typography 
                    sx={{
                        fontFamily: 'var(--font-family-head)',
                        color: 'var(--dark-blue)',
                        fontWeight: 'bold',
                        fontSize: '25px'
                    }}
                >
                    NEWTECONS TỔ CHỨC CHUỖI HOẠT ĐỘNG CHÀO MỪNG NGÀY TRUYỀN THỐNG 2023
                </Typography>
                <Typography 
                    sx={{
                        color: 'var(--light-blue)',
                        fontSize:'13px',
                        textDecoration:'none !important'
                    }}
                >
                    06 Tháng 08, 2023
                </Typography>
                <div className="newsButton" style={{position:'absolute',bottom:'0',right:'0',width:'50px',height:'50px',backgroundColor:'var(--dark-blue)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <ArrowForwardIcon sx={{width:'2rem',height:'2rem', color:'var(--white)'}}/>
                </div>
            </Box>
            </Grid>
            <Grid item xs={8}>
              <Box
              classes={classes.newsImage}
                  sx={{
                      width: '100%',
                      height: {
                          xs: '300px',
                          md: '300px',
                          lg: '400px'
                      },
                      backgroundImage: 'url(https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-scaled.jpg)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                  }}
              >
                      
              </Box>
            </Grid>
            
          </Grid>
      </Link>
    </Box>
  )
}

const PostCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} sx={{borderRadius:'0px', boxShadow:'unset'}}>
      <Link
        className={classes.inner}
        href="https://newtecons.vn/newtecons-to-chuc-chuoi-hoat-dong-chao-mung-ngay-truyen-thong-2023/"
        title="NEWTECONS TỔ CHỨC CHUỖI HOẠT ĐỘNG CHÀO MỪNG NGÀY TRUYỀN THỐNG 2023"
      >
        <Box position='relative'>
            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: '300px',
                        md: '300px',
                        lg: '250px'
                    },
                    backgroundImage: 'linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0) 100%), url(https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-scaled.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    transition: 'transform .2s linear', // Define the transition outside the &:hover selector
                    '&:hover': {
                        transform: 'scale(1.2)'
                    }
                }}
            >
                    
            </Box>
            <Box
                    position='absolute'
                    bottom={0}
                    sx={{
                        p:2,
                        width:'100%'
                    }}
                >
                    <Typography 
                        sx={{
                            color: 'var(--white)',
                            fontSize:'13px',
                            textDecoration:'none !important'
                        }}
                    >
                        06 Tháng 08, 2023
                    </Typography>
                    <Typography 
                        variant="h6"
                        sx={{
                            color: 'var(--white)',
                            textDecoration:'none !important',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis', 
                        }}
                    >
                        NEWTECONS TỔ CHỨC CHUỖI HOẠT ĐỘNG CHÀO MỪNG NGÀY TRUYỀN THỐNG 2023
                    </Typography>
            </Box>
        </Box>
      </Link>
    </Card>
  );
};


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