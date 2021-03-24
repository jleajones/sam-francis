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
import Button from '../components/button';

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
            Your love and support is the most important gift to us.
          </h2>
          <p style={{ width: '70%', margin: '0 auto', fontSize: '18px'}}>
            We are blessed with the necessities of everyday life, and have dedicated our registry to securing a down payment for our future home. You can contribute as much as you are able to. And if not, your presence in our life is always enough.
          </p>
          <p style={{ marginTop: '24px', fontSize: '18px'}}>
            Either way, we thank you dearly for your love and support! May God bless you always!
          </p>

        </TitleContainer>
        <div style={{ width: '600px', margin: '0 auto', marginBottom: '60px'}}>
          <SpaceBetweenContainer>
            <div>
              <PayPalButton>
                <Link href='https://registry.theknot.com/francis-carrero-samuel-green-july-2021-ny/31514207'>
                  <StyledLink>The Knot</StyledLink>
                </Link>
              </PayPalButton>
            </div>
            <div>
              <PayPalButton>
                <Link href='https://www.paypal.com/paypalme/SamandFrancis?locale.x=en_US'>
                  <StyledLink>PayPal</StyledLink>
                </Link>
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
