import { createTheme as createMuiTheme } from '@mui/material';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { createShadows } from './create-shadows';
import { createTypography } from './create-typography';
import neutral from './colors.js'

export function createTheme() {
//   const palette = createPalette();
//   const components = createComponents({ palette });
  const shadows = createShadows();
  const typography = createTypography();

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440
      }
    },
    color :{
        wh: '#FFFFFF',//white
        bro: '#f45b14',//orange
        prb: '#06486B',//main dark blue
        bl: '#000000'//text black
      }
    // components,
    // palette,
    // shadows,
    // shape: {
    //   borderRadius: 8
    // },
    // typography
  });
}
