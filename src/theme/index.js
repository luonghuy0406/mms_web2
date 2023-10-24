import { createTheme as createMuiTheme } from '@mui/material';
import { createComponents } from './create-components';
import { createTypography } from './create-typography';
import { neutral } from './colors';

export function createTheme() {
//   const palette = createPalette();
  const components = createComponents(neutral);
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
    typography
  });
}
