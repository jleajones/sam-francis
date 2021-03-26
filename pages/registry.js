import { useEffect, useContext } from 'react';
import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithPageTitle from '../layouts/withPageTitle';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import TextBar from '../components/textBar';
import Collage from '../components/collage';
import PageTitle from '../components/pageTitle';
import Footer from '../components/footer';
import styled from 'styled-components';
import { Container, SpaceBetweenContainer } from '../components/containers';
import Link from 'next/link';
import Button from '../components/button';import {
  REGISTRY_TITLE,
  REGISTRY_NOTE
} from '../constants';

const TitleContainer = styled(Container)`
  padding: 120px 0 40px;
  text-align: center;
`;

const StyledLink = styled.a`
  color: #fff;
  font-weight: bold;
`;

const PayPalButton = styled(Button)`
  width: 190px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default function Registry() {
  const { t } = useTranslation();
  const [locale] = useContext(LanguageContext);
  useEffect(() => {
    setLanguageCookie(null, locale);
  }, []);
  const pageTitle = t('REGISTRY_PAGE_TITLE');
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section>
        <TitleContainer>
          <h2 style={{ marginBottom: '36px'}}>
            {t(REGISTRY_TITLE.key)}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: t(REGISTRY_NOTE.key) }} />

        </TitleContainer>
        <div style={{ width: '600px', margin: '0 auto', marginBottom: '60px'}}>
          <SpaceBetweenContainer>
            <div>
              <PayPalButton>
                <a href='https://registry.theknot.com/francis-carrero-samuel-green-july-2021-ny/31514207' target="_blank">
                  The Knot
                </a>
              </PayPalButton>
            </div>
            <div>
              <PayPalButton>
                <a href='https://www.paypal.com/paypalme/SamandFrancis?locale.x=en_US' target="_blank">
                  PayPal
                </a>
              </PayPalButton>
            </div>
          </SpaceBetweenContainer>
        </div>
      </section>
      {/*<Footer />*/}
      <Collage />
      <TextBar
        title={t('ARE_YOU_COMING_TITLE')}
        href="/rsvp"
        cta={t('RSVP_BUTTON_TITLE')}
      />
    </>
  );
}

Registry.Layout = WithPageTitle;
