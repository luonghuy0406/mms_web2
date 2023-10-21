import React, { useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
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
import Image from "next/image";
import useTrans from "@/hooks/useTrans";

function SubProduct({product}) {
  const trans = useTrans()
  return (
    <Box sx={{display:'flex', alignItems:'center', flexDirection: 'column', padding: 1, paddingTop: 4}}>
      <img  src={`${process.env.API_HOST}/read_image/${product.image}`} width="200" height="200" alt={trans == 'vi' ? product.name : product.name_en}/>
      <Typography fontWeight={'bold'} padding={2}>
        {trans == 'vi' ? (product.name || product.name_en) : (product.name_en || product.name)}
      </Typography>
      <Typography>
        {trans == 'vi' ? (product.content || product.content_en) : (product.content_en || product.content)}
      </Typography>
    </Box>
  );
}

export default SubProduct;


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
