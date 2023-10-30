import React, { useContext } from "react";
import {
  Box,
} from "@mui/material";
import 'animate.css'
import useTrans from "@/hooks/useTrans";
import { LanguageContext } from "@/contexts/context";

function SubProduct({product}) {
  const trans = useTrans()
  const { language } = useContext(LanguageContext);
  return (
    <Box sx={{display:'flex', alignItems:'center', flexDirection: 'column', padding: 1, paddingTop: 4}}>
      <img  src={`${process.env.API_HOST}/read_image/${product.image}`} width="200" height="200" alt={language == 'vi' ? product.name : product.name_en}/>
      <Box p={2} className='ck-content'>
        <label
          style={{
            color: "var(--black)",
            fontFamily: "var(--font-family)",
            fontWeight:"bolder"
          }}
          dangerouslySetInnerHTML={{ __html: language == 'vi' ? (product.name || product.name_en) : (product.name_en || product.name)}}
        ></label>
      </Box>
      <Box p={1} className='ck-content'>
        <label
          style={{
            color: "var(--black)",
            fontFamily: "var(--font-family)",
          }}
          dangerouslySetInnerHTML={{ __html: language == 'vi' ? (product.content || product.content_en) : (product.content_en || product.content)}}
        ></label>
      </Box>
    </Box>
  );
}

export default SubProduct;
