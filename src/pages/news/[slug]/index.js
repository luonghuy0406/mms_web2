import { useRouter } from 'next/router';
import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Product from '@/sections/products/product';
import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/context';
import { convertPath } from '@/layouts/main/top-nav';

const useStyles = makeStyles(() => {
  return {
    container: {
      width: "calc(100%)  !important",
      marginLeft: "0 !important",
    }
  };
});
const Page = ({posts}) => {
    const router = useRouter();
    const { slug } = router.query;
    const { language } = useContext(LanguageContext);
    const post = posts.filter((post) => {return `${convertPath(post.name)}-${post.id_post}` == slug})
    const classes = useStyles();
    return(
        <>
            <Head>
            <title>
                {language =='vi' ? post[0]['name'] : post[0]?.['name_en']} | MEKONG MARINE SUPPLY CO., LTD
            </title>
            </Head>
            <Grid item md={12}>
              <Container maxWidth="md">
                <Grid
                  container
                  classes={{ root: classes.container }}
                  className={"animate__animated animate__delay-0.1s"}
                >
                  <Box
                    sx={{
                        width: '100%',
                        height: {
                            xs: '200px',
                            md: '200px',
                            lg: '300px'
                        },
                        backgroundImage: `url("${process.env.API_HOST}/read_image/${post[0].image}")`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                  >
                  </Box>
                  <Box
                    sx={{ display: "flex", padding: "30px 0", width: '100%'}}
                    className={"animate__animated animate__delay-0.1s"}
                  >
                    <Box sx={{display: "flex", borderBottom:'1px solid var(--gray-light)',width: '100%',display:'flex',alignItems:'center'}}>
                      <Box
                        sx={{
                          height: "100%",
                          backgroundColor: "var(--light-blue)",
                          textAlign: "center",
                          padding: "10px",
                          marginRight:"15px"
                        }}
                      >
                        <Typography color={"var(--white)"} variant="h7" fontWeight="bolder">
                          {
                            convertDate(post[0].cre_date, '%Y/%M')
                          }
                        </Typography>
                        <Typography color={"var(--white)"} variant="h4" fontWeight="bolder">
                          {
                            convertDate(post[0].cre_date, '%D')
                          }
                        </Typography>
                      </Box>
                      <Typography
                        fontFamily={"var(--font-family-header)"}
                        color={"var(--dark-blue)"}
                        variant="h4"
                        component="h4"
                        fontWeight="bolder"
                        textTransform={"uppercase"}
                      >
                        {language == 'vi' ? post[0]['name'] : post[0]['name_en']}
                      </Typography>
                    </Box>
                  </Box>
                  <div 
                    className='ck-content'
                    dangerouslySetInnerHTML={{__html:language == 'vi' ? post[0]['content'] : post[0]['content_en']}}

                  >

                  </div>

                </Grid>
              </Container>
            </Grid>
        </>
    )
};

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

Page.getInitialProps = async (ctx) => {
  const res = await fetch(process.env.API_HOST +'/post/list')
  const json = await res.json()
  const resFooter = await fetch(process.env.API_HOST +'/webinf/list')
  const jsonFooter = await resFooter.json()
  return { posts: json.results, footer: jsonFooter.results }
}
export default Page;

const convertDate = (date, options)=>{
  const cre_date = new Date(date);
  let value = options.replace('%M',cre_date.getMonth() < 10 ? '0'+cre_date.getMonth(): cre_date.getMonth()).replace('%Y',cre_date.getFullYear()).replace('%D',cre_date.getDate() < 10 ? '0' + cre_date.getDate() : cre_date.getDate())
  return value
}