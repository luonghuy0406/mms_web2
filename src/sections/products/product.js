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
  import React, { useEffect } from "react";
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
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const classes = useStyles();
    const { t } = useTranslation();
    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
    });
    const data = {name:'product1'}
    const logoBrand =''
    // useEffect(() => {
    //   if (inView && !$("#lb-" + secondId).hasClass("animate__fadeInLeft")) {
    //     $("#lb-" + secondId).addClass("animate__fadeInLeft");
    //   }
    //   if (inView && !$("#ct-" + secondId).hasClass("animate__fadeInRight")) {
    //     $("#ct-" + secondId).addClass("animate__fadeInRight");
    //   }
    // }, [inView]);
    return (
      <Grid item md={12} ref={ref}  sx={{ padding: { xs: "15px 0", md: "30px 0" },paddingBottom:"0 !important"}}>
        <Container maxWidth="md" sx={{ p: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href='/' underline="hover" style={{ textDecoration: "none", color: "gray" }}>
              Home
            </Link>
            <Link href={`/${props.parent}`} underline="hover" style={{ textDecoration: "none", color: "gray" }}>
              {props.parent}
            </Link>
            <Typography color="var(--orange)">
              {props.slug}
            </Typography>
          </Breadcrumbs>
          <div
            // id={"lb-" + secondId}
            style={{ display: "flex", padding: "50px 0" }}
            className={"animate__animated animate__delay-0.1s"}
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
              {props.slug}
            </Typography>
          </div>
          <Grid
            // id={"ct-" + secondId}
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
                  src={data.image}
                />
                <Box
                  component="img"
                  sx={{
                    width: { xs: "70px", md: "100px" },
                    position: "absolute",
                    padding: "10px",
                    top: "0",
                    left: "0",
                  }}
                  src={logoBrand}
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
                  sx={{ textTransform: "uppercase" }}
                >
                  {data.name.replace("<br>", "")}
                </Typography>
                <Divider />
                <Box pt={1} pb={2}>
                  <label
                    style={{
                      color: "var(--dark-blue)",
                      fontFamily: "var(--font-family)",
                    }}
                    dangerouslySetInnerHTML={{ __html: t(data["description"]) }}
                  ></label>
                </Box>
  
                <Typography
                  color={"var(--dark-blue)"}
                  fontFamily={"var(--font-family-header)"}
                  variant="h6"
                  component="h6"
                  fontWeight="bolder"
                  pb={2}
                >
                  {t("SPECIFICATION")}
                </Typography>
                <Divider />
                <Box pt={1} pb={2}>
                  <label
                    style={{
                      color: "var(--dark-blue)",
                      fontFamily: "var(--font-family)",
                    }}
                    dangerouslySetInnerHTML={{ __html: t(data["specification"]) }}
                  ></label>
                  <br />
                  <br />
                  {data.brochue && (
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
                        href={data.brochue}
                        style={{ paddingLeft: "10px" }}
                        target="_blank"
                      >
                        {t("Product brochure")}
                      </a>
                    </label>
                  )}
                </Box>
                <FormContact
                //   productId={secondId}
                  content={data.name.replace("<br>", "")}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    );
  }
  
  export default Product;
  const FormContact = ({ ...props }) => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [nameValid, setNameValid] = React.useState(false);
    const [emailValid, setEmailValid] = React.useState(false);
    const [phoneValid, setPhoneValid] = React.useState(false);
    const { t } = useTranslation();
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
          {t("Contact us")}
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
              {t("Contact us")}
            </DialogTitle>
            <DialogContent sx={{ paddingTop: "24px !important" }}>
              <TextField
                required
                autoFocus
                margin="dense"
                name="name"
                label={t("Full name")}
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
                helperText={nameValid ? t("Name is not null.") : ""}
              />
              <TextField
                required
                margin="dense"
                name="email"
                label={t("Email address")}
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
                helperText={emailValid ? t("Email is not null.") : ""}
              />
              <TextField
                required
                margin="dense"
                name="phone"
                label={t("Phone number")}
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
                helperText={phoneValid ? t("Phone number is not null.") : ""}
              />
              <TextField
                margin="dense"
                id="content"
                name="content"
                label={t("Message")}
                multiline
                rows={4}
                defaultValue={t("I'm interested in ") + props.content}
                fullWidth
                variant="outlined"
                pt={1}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>{t("CANCEL")}</Button>
              <Button onClick={handleSendMail}>{t("SEND")}</Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  };