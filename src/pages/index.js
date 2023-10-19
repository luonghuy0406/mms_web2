
import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Typography} from '@mui/material';
import { Layout as MainLayout} from 'src/layouts/main/layout';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useInView } from 'react-intersection-observer';
import AboutUs from '@/sections/aboutus/aboutus';
import OurPartner from '@/sections/ourpartner/ourpartner';
import ProductHome from '@/sections/products/product_home';
import useTrans from '../hooks/useTrans';
import axios from 'axios';
import { LanguageContext } from '@/contexts/context';


const Page = ({ products, banners,aboutus, footerDetail }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { language } = useContext(LanguageContext);
  const trans = useTrans()
  return (
    <>
      <Head>
        <title>
          {trans['Home']} | MEKONG MARINE SUPPLY CO., LTD
        </title>
      </Head>
      <Box
        ref={ref}
        className={"animate__animated animate__delay-0.1s"}
        sx={{
          paddingBottom: '30px',
          position: 'relative',
          maxHeight:{
            xs: '200px',
            md: '400px',
            xl: '600px'
          }
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          customTransition="all 0.5s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
      {
          banners.map((image)=>{
            return(
              <Box
                key={'image'+image.id_bn}
                sx={{
                  display: "block",
                  margin: "auto",
                  width: "100%",
                  // backgroundImage:`url("${'https://1454-183-80-32-33.ngrok-free.app'}/read_image/${image.link}")`,
                  backgroundImage:`url("https://s3.eu-central-1.wasabisys.com/rta-rtcloud/file_1696925655510.jpeg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height:{
                    xs: '200px',
                    md: '400px',
                    xl: '600px'
                  }
                }}
              />

            )
          })
          }
          
        </Carousel>
      </Box>
      <AboutUs products ={products} aboutus ={aboutus}/>
      <OurPartner/>
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
                {trans['Products']}
                </Typography>
                <span className={"line-brand"}></span>
            </Grid>
            
          </Grid>
          {
            products?.map((product,index)=>{
              return <ProductHome key={product.name+index} product={product} language={language} reverse={index%2==0}/>
            })
          }
        </Container>
      </Grid>
     
    </>
  )};

Page.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

Page.getInitialProps = async (ctx) => {
  // const res = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/product/list')
  // const json = await res.json()
  // const resBanner = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/banner/list')
  // const jsonBanner = await resBanner.json()
  
  // const resAbout = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/about-us')
  // const jsonAbout = await resAbout.json()
  // const resFooter = await fetch('https://1454-183-80-32-33.ngrok-free.app' +'/webinf/list')
  // const jsonFooter = await resFooter.json()
  const json = {
    "results": [
        {
            "id_product": 1,
            "name": "Durasin",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "ffffff",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-18T17:00:00.000Z",
            "edit_date": "2023-10-01T17:00:00.000Z",
            "image": "app%2Fstorage%2F1696218230676durasinv.jpg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 1,
            "status": 1
        },
        {
            "id_product": 2,
            "name": "KVM Sealing Compound",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2Frw.jpg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 1,
            "status": 1
        },
        {
            "id_product": 3,
            "name": "Mangana ",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 1,
            "status": 1
        },
        {
            "id_product": 4,
            "name": "Fire Stop ",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2F2product.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 1,
            "status": 1
        },
        {
            "id_product": 5,
            "name": "Bos Oily Waterseparator ",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 2,
            "status": 1
        },
        {
            "id_product": 6,
            "name": "Sewage Treament (WASTEWATER EQUIPMENT)",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2Fdurasinv.jpg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 2,
            "status": 1
        },
        {
            "id_product": 7,
            "name": "Water Maker RO",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2F2product.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 2,
            "status": 1
        },
        {
            "id_product": 8,
            "name": "Viega Marine Systems",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": null,
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 3,
            "status": 1
        },
        {
            "id_product": 9,
            "name": "Viega Seapress",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "ffffff",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": "2023-09-21T17:00:00.000Z",
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 3,
            "status": 1
        },
        {
            "id_product": 10,
            "name": "Viega Easytop",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "ffffff",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": "2023-09-21T17:00:00.000Z",
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 3,
            "status": 1
        },
        {
            "id_product": 11,
            "name": "Viega Raxofix",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "ffffff",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": "2023-09-25T17:00:00.000Z",
            "image": "app%2Fstorage%2F2product.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 3,
            "status": 1
        },
        {
            "id_product": 12,
            "name": "Viega Press Systems",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": "ffffff",
            "des_en": "",
            "spec_en": "",
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": "2023-09-25T17:00:00.000Z",
            "image": "app%2Fstorage%2Fmangana.jpeg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 3,
            "status": 1
        },
        {
            "id_product": 13,
            "name": "Viton/FKM rubber packing sheet\n",
            "des": `<div class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main" contenteditable="true" spellcheck="false"><p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Keo đổ căn <strong>DURASIN</strong> là hợp chất keo epoxy rắn 100%, được sử dụng để đổ căn cho hệ thống chân vịt, động cơ máy phụ, hệ thống bánh lái và máy móc trên boong tàu, với khả năng chịu tải vật lý, chịu sốc nhiệt cao khi máy vận hành.</span></span></p><ul><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> được ứng dụng để đổ căn chân đế máy móc, thiết bị công nghiệp nặng và ray cầu.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> với sức bền nén cao, có thể chịu được áp suất ngoại lực mạnh. Sản phẩm có khả năng tự định mức, bám dính cao đối với nền bê tông, và không bắt lửa.</span></span></span></li><li><span class="ck-list-bogus-paragraph"><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>DURASIN</strong> là hỗn hợp keo epoxy và chất làm rắn. Khi được trộn chung với nhau theo đúng tỉ lệ, hai chất này sẽ trở thành một hợp chất cực rắn không co ngót, chịu được va chạm mạnh và có sức bền nén cao.</span></span></span></li></ul><p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:justify;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>Xuất xứ:</strong> hãng Daemmstoff Industrie Korea Ltd (Hàn Quốc)</span></span></p></div>`,
            "spec": null,
            "des_en": null,
            "spec_en": null,
            "cre_date": "2023-09-17T17:00:00.000Z",
            "edit_date": "2023-09-17T17:00:00.000Z",
            "image": "app%2Fstorage%2Frw.jpg",
            "brochure": null,
            "id_user": "admin",
            "id_group": 4,
            "status": 1
        }
    ]
  }
  const jsonBanner = {
    "results": [
        {
            "id_bn": 1,
            "link": "app%2Fstorage%2F1696778923858banner2.jpeg"
        },
        {
            "id_bn": 2,
            "link": "app%2Fstorage%2Fbanner1.jpg"
        },
        {
            "id_bn": 3,
            "link": "app%2Fstorage%2F1696778929332banner2.jpeg"
        },
        {
            "id_bn": 4,
            "link": "app%2Fstorage%2Fbanner1.jpg"
        }
    ]
  }
  const jsonAbout = {
    "results": [
        {
            "id": 0,
            "content": `<p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Công Ty TNHH Mekong Marine Supply (<strong>MMS</strong>) hoạt động trong lĩnh vực hàng hải chuyên Phân phối/Cung cấp thiết bị, vật tư phục vụ cho đóng mới và sửa chữa tàu biển bao gồm: Hợp chất bịt kín cáp chống cháy, chống thấm cho đóng tàu, ống cấp nước cao cấp, Máy tách nước dầu xử lý nước đáy tàu,...&nbsp;</span></span></p><p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>MMS</strong> cam kết hàng nhập khẩu chính hãng từ các thương hiệu nổi tiếng đến đến từ Đức, Mỹ, Hàn Quốc, Châu Âu và các nước khác. Chúng tôi luôn mong muốn mang đến những sản phẩm chất lượng và dịch vụ tốt nhất đến với khách hàng.&nbsp;</span></span></p><p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>MMS</strong> xin chân thành cảm ơn các bạn đã truy cập, hy vọng <strong>MMS</strong> sẽ là người bạn đồng hành đáng tin cậy của các bạn!</span></span></p>`,
            "content_en": `<p data-placeholder="Type or paste your content here!"><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Công Ty TNHH Mekong Marine Supply (<strong>MMS</strong>) hoạt động trong lĩnh vực hàng hải chuyên Phân phối/Cung cấp thiết bị, vật tư phục vụ cho đóng mới và sửa chữa tàu biển bao gồm: Hợp chất bịt kín cáp chống cháy, chống thấm cho đóng tàu, ống cấp nước cao cấp, Máy tách nước dầu xử lý nước đáy tàu,...&nbsp;</span></span></p><p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>MMS</strong> cam kết hàng nhập khẩu chính hãng từ các thương hiệu nổi tiếng đến đến từ Đức, Mỹ, Hàn Quốc, Châu Âu và các nước khác. Chúng tôi luôn mong muốn mang đến những sản phẩm chất lượng và dịch vụ tốt nhất đến với khách hàng.&nbsp;</span></span></p><p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);font-family:Roboto, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;"><strong>MMS</strong> xin chân thành cảm ơn các bạn đã truy cập, hy vọng <strong>MMS</strong> sẽ là người bạn đồng hành đáng tin cậy của các bạn!</span></span></p>`,
            "image1": "app%2Fstorage%2F1696218230676durasinv.jpg",
            "image2": "app%2Fstorage%2Frw.jpg",
            "image3": "app%2Fstorage%2FMMS Logo1.png"
        }
    ]
}
const jsonFooter = {
  "results": [
      {
          "id": "head_office",
          "adress": "Tầng 1, 16 Yên Thế, Phường 2, Quận Tân Bình, HCMC, Việt Nam.",
          "adress_en": "1st Floor, 16 Yen The St, Ward 2, Tan Binh Dist., HCMC, Viet Nam.",
          "phone_num": "+84 0123456789",
          "email": "inquiries@mmsvn.com",
          "link1": "facebook.com",
          "link2": "youtube.com",
          "link3": "https://www.linkedin.com/"
      },
      {
          "id": "vt_office",
          "adress": "D1-2/8 Khu đô thị Chí Linh, Thành phố Vũng Tàu, Việt Nam.",
          "adress_en": "D1-2/8 Chi Linh Urban Area, Vung Tau City, Viet Nam.",
          "phone_num": "+84 09876543210",
          "email": null,
          "link1": null,
          "link2": null,
          "link3": null
      }
  ]
}
  return { products: json.results, banners : jsonBanner.results, aboutus: jsonAbout.results[0], footerDetail: jsonFooter.results }
}
 
export default Page
