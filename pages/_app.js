import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { LanguageProvider } from '../components/context/LanguageProvider';
import { getLanguageCookie } from '../utils/language';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: futura-pt;
  }

  body * {
    box-sizing: border-box;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0
  }
`;

const theme = {
  colors: {
    accentLight: '#fcdb64',
    accent: '#faca19',
    accentDark: '#DBAD05',
    bgLight: '#fafafa',
    greyLight: '#e2e2e2',
    greyDark: '#ccc'
  }
};

const Noop = ({ children }) => children;

export default function App({ Component, pageProps, language }) {
  const Layout = Component.Layout || Noop;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LanguageProvider language={language}>
          <Layout>
            <Head>
              <title>Sam &amp; Francis</title>
              <link
                href="https://use.typekit.net/tvs6qvu.css"
                rel="stylesheet"
              />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const language = getLanguageCookie(ctx);
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { ...pageProps, language };
};

App.propTypes = {
  Component: PropTypes.func,
  language: PropTypes.string.isRequired,
  pageProps: PropTypes.shape({})
};
