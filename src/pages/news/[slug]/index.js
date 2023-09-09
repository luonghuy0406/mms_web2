import { useRouter } from 'next/router';
import Head from 'next/head';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Product from '@/sections/products/product';
import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => {
  return {
    container: {
      width: "calc(100%)  !important",
      marginLeft: "0 !important",
    }
  };
});
const Page = () => {
    const router = useRouter    ();
    const { slug } = router.query;

    const classes = useStyles();
    return(
        <>
            <Head>
            <title>
                A | MEKONG MARINE SUPPLY CO., LTD
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
                        backgroundImage: 'url(https://newtecons.vn/wp-content/uploads/2023/08/MNP_0905-scaled.jpg)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                  >
                  </Box>
                  <Box
                    sx={{ display: "flex", padding: "30px 0" }}
                    className={"animate__animated animate__delay-0.1s"}
                  >
                    <Box sx={{display: "flex", borderBottom:'1px solid var(--gray-light)'}}>
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
                          2023/09
                        </Typography>
                        <Typography color={"var(--white)"} variant="h4" fontWeight="bolder">
                          08
                        </Typography>
                      </Box>
                      <Typography
                        fontFamily={"var(--font-family-header)"}
                        color={"var(--dark-blue)"}
                        variant="h4"
                        component="h4"
                        fontWeight="bolder"
                      >
                        NEWTECONS TỔ CHỨC CHUỖI HOẠT ĐỘNG CHÀO MỪNG NGÀY TRUYỀN THỐNG 2023
                      </Typography>
                    </Box>
                  </Box>
                  <div 
                    className='ck-content'
                    dangerouslySetInnerHTML={{__html:`<h2>sdạlkdjad</h2><figure class="image"><img src="data:image/png;base64,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"></figure><blockquote><p>sfdsqưezxc</p><p>ads</p><p>ád</p></blockquote><ol><li>123</li><li>sd</li><li>zxc</li><li>123</li></ol><p style="text-align:center;"><strong>ciínakd á;dlk ,.xzcơeđamsã,.mc;lá&nbsp;</strong></p>`}}

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

export default Page;
