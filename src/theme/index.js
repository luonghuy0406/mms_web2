import { createTheme as createMuiTheme } from '@mui/material';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { createShadows } from './create-shadows';
import { createTypography } from './create-typography';
import { neutral } from './colors';

export function createTheme() {
//   const palette = createPalette();
  const components = createComponents(neutral);
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
    color : neutral,
    components,
    // palette,
    // shadows,
    // shape: {
    //   borderRadius: 8
    // },
    typography
  });
}
