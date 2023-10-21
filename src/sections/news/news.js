import React, { useContext, useEffect } from "react";
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
import { convertPath } from "@/layouts/main/top-nav";
import { LanguageContext } from "@/contexts/context";
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

  function sortPostByCreateDate(posts) {
    // Sorting the posts array by create date
    posts.sort((a, b) => {
    const createDateA = new Date(a.cre_date);
    const createDateB = new Date(b.cre_date);
    return createDateA - createDateB;
  });
    
    return posts;
  }

function News(props) {
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const posts = sortPostByCreateDate(props.posts)
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
                    <NewestPost path={`/${props.path}/${convertPath(language == 'vi' ? posts[0]['name'] : posts[0]['name_en'])}-${posts[0].id_post}`} post={posts[0]} id={posts[0].id_post}/>
                </Grid>
                {
                  posts?.map((post,index) => {
                    if(index == 0) return []
                    return (
                      <Grid item xs={6} key={`${convertPath(post['name_en'])}-${post.id_post}`}>
                          <PostCard path={`/${props.path}/${convertPath(language == 'vi' ? post['name'] : post['name_en'])}-${post.id_post}`} id={post.id_post} post={post}/>
                      </Grid>
                    )
                  })
                }


            </Grid>
        </Grid>
      </Container>
    </Grid>
    
  );
}

export default News;

const NewestPost = (props)=>{
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  return(
    <Box className={classes.cardNew}> 
      <Link
        className={classes.inner}
        href={`${props.path}`}
        title={language == 'vi' ? props.post['name'] : props.post['name_en']}
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
                    {language == 'vi' ? props.post['name'] : props.post['name_en']}
                </Typography>
                <Typography 
                    sx={{
                        color: 'var(--light-blue)',
                        fontSize:'13px',
                        textDecoration:'none !important'
                    }}
                >
                    {convertDate(props.post.cre_date,language)}
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
                      backgroundImage: `url('${process.env.API_HOST}/read_image/${props.post.image}')`,
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

const PostCard = (props) => {
  const classes = useStyles();
  const { language } = useContext(LanguageContext);
  return (
    <Card className={classes.card} sx={{borderRadius:'0px', boxShadow:'unset'}}>
      <Link
        className={classes.inner}
        href={`${props.path}`}
        title={language == 'vi' ? props.post['name'] : props.post['name_en']}
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
                    backgroundImage: `linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0) 100%), url("${process.env.API_HOST}/read_image/${props.post.image}")`,
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
                        {convertDate(props.post.cre_date,language)}
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
                        {language == 'vi' ? props.post['name'] : props.post['name_en']}
                    </Typography>
            </Box>
        </Box>
      </Link>
    </Card>
  );
};

const convertDate = (date,locale)=>{
  const currentDate = new Date(date);
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  };

  const formattedDate = currentDate.toLocaleDateString(locale =='vi' ? 'vi-VN' : 'en-US' , options);
  return formattedDate
}