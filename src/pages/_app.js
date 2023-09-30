
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import { createTheme } from 'src/theme';
import '../styles/global.css';
import '../styles/ckeditor.css';
import { LanguageProvider } from '@/contexts/context';

const App = (props) => {
  const { Component, pageProps } = props;


  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  return (
    <>
    <Head>
        <title>
          MEKONG MARINE SUPPLY CO., LTD
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
              {
                  getLayout(<Component {...pageProps} />)
              }
      </ThemeProvider>
      </LanguageProvider>
      
    </>
  );
};

export default App;
