import {
    Box,
    Container,
    Divider,
    Grid,
    Typography,
    useTheme,
    Breadcrumbs,
  } from "@mui/material";
  import $ from "jquery";
  import React, { useContext, useEffect, useRef } from "react";
  import { useTranslation } from "react-i18next";
  import { useInView } from "react-intersection-observer";
  import "react-multi-carousel/lib/styles.css";
  import ArticleIcon from "@mui/icons-material/Article";
  
  import Button from "@mui/material/Button";
  import TextField from "@mui/material/TextField";
  import Dialog from "@mui/material/Dialog";
  import DialogActions from "@mui/material/DialogActions";
  import DialogContent from "@mui/material/DialogContent";
  import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core";
import Link from "next/link";
import { LanguageContext } from "@/contexts/context";
import SubProduct from "./sub_product";
import useTrans from "@/hooks/useTrans";

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
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: { xs: "60%", md: "90%" },
                    aspectRatio: " 3/2",
                    objectFit: "contain",
                  }}
                  // src={`${'https://1454-183-80-32-33.ngrok-free.app'}/read_image/${props.product[0].image}`}
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
                    dangerouslySetInnerHTML={{ __html: '<p>Thông số kỹ thuật</p><ul><li>Thông số 1</li><li>Thông số 2</li><li>…</li></ul>' }}
                  ></label>
                  <br />
                  <br /> */}
                  {/* {data.brochue && ( */}
                    <label
                      style={{
                        color: "var(--dark-blue)",
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
                <FormContact
                //   productId={secondId}
                  content={props.product.name}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
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
  const FormContact = ({ ...props }) => {
    const trans = useTrans()
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [nameValid, setNameValid] = React.useState(false);
    const [emailValid, setEmailValid] = React.useState(false);
    const [phoneValid, setPhoneValid] = React.useState(false);
    const classes = useStyles();
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setOpen("");
      setName("");
      setEmail("");
    };
    const handleSendMail = () => {
      if (name.length > 0 && email.length > 0 && phone.length > 0) {
        setOpen(false);
        setNameValid(false);
        setEmailValid(false);
        setPhoneValid(false);
        let data = $("#send-mail-form" + props.productId).serialize();
        $.ajax({
          type: "POST",
          url: 'https://api.pacificpsc.com/send',
          data: data,
          success: function (data) {},
          error: function (error) {},
        });
      } else {
        if (name.length == 0) {
          setNameValid(true);
        } else {
          setNameValid(false);
        }
        if (email.length == 0) {
          setEmailValid(true);
        } else {
          setEmailValid(false);
        }
        if (phone.length == 0) {
          setPhoneValid(true);
        } else {
          setPhoneValid(false);
        }
      }
    };
  
    return (
      <div style={{ float: "right" }}>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          className={classes.button}
        >
          {trans['Contact us']}
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <form id={"send-mail-form" + props.productId}>
            <DialogTitle
              sx={{
                backgroundColor: "var(--dark-blue)",
                color: "white",
                textAlign: "center",
              }}
            >
              {trans['Contact us']}
            </DialogTitle>
            <DialogContent sx={{ paddingTop: "24px !important" }}>
              <TextField
                required
                autoFocus
                margin="dense"
                name="name"
                label="Full name"
                type="text"
                fullWidth
                variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.length > 0) {
                    setNameValid(false);
                  } else {
                    setNameValid(true);
                  }
                }}
                error={nameValid}
                helperText={nameValid ? "Name is not null." : ""}
              />
              <TextField
                required
                margin="dense"
                name="email"
                label="Email address"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value.length > 0) {
                    setEmailValid(false);
                  } else {
                    setEmailValid(true);
                  }
                }}
                error={emailValid}
                helperText={emailValid ? "Email is not null." : ""}
              />
              <TextField
                required
                margin="dense"
                name="phone"
                label="Phone number"
                type="text"
                fullWidth
                variant="outlined"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (e.target.value.length > 0) {
                    setPhoneValid(false);
                  } else {
                    setPhoneValid(true);
                  }
                }}
                error={phoneValid}
                helperText={phoneValid ? "Phone number is not null." : ""}
              />
              <TextField
                margin="dense"
                id="content"
                name="content"
                label="Message"
                multiline
                rows={4}
                defaultValue={"I'm interested in " + props.content}
                fullWidth
                variant="outlined"
                pt={1}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>{trans['CANCEL']}</Button>
              <Button onClick={handleSendMail}>{trans['SEND']}</Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  };