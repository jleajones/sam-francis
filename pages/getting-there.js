import { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithNav from '../layouts/withNav';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import TextBar from '../components/textBar';
import Collage from '../components/collage';
import PageTitle from '../components/pageTitle';
import Footer from '../components/footer';
import { FlexContainer } from '../components/containers';

const MapContainer = styled(FlexContainer)`
  padding: 120px 0 160px;
`;

const Map = styled.div`
  width: 100%;
  margin: 0 auto 40px;
  border: solid 1px #ccc;
  height: 460px;
  @media (min-width: 1024px) {
    height: 560px;
    width: 70%;
    margin: 0;
  }
`;

const MapText = styled.div`
  @media (min-width: 1024px) {
    margin-left: 40px;
  }
`;

const Textblock = styled.div`
  margin-bottom: 80px;

  p > b {
    font-family: futura-pt-bold;
  }
`;

const Heading = styled.h5`
  font-size: 13px;
  font-family: futura-pt-bold;
  color: #ccc;
  margin-bottom: 5px;
`;

export default function GettingThere() {
  const { t } = useTranslation();
  const [locale] = useContext(LanguageContext);
  useEffect(() => {
    setLanguageCookie(null, locale);
  }, []);
  const pageTitle = t('GETTING_THERE_PAGE_TITLE');
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <PageTitle title={pageTitle} />

      <MapContainer>
        <Map />
        <MapText>
          <Textblock>
            <Heading>Venue</Heading>
            <p>
              <b>Marina Del Rey</b>
            </p>
            <p>Address:1 Marina Dr. Bronx, NY 10465</p>
            <p>Phone: xxx-xxx-xxxx</p>
            <p>
              Website: <a href="http://google.com">www.somewebstie.com</a>
            </p>
          </Textblock>
          <Textblock>
            <Heading>Travel Information</Heading>
            <p>
              Morbi eleifend pellentesque ornare. Pellentesque ut orci ornare
              lectus malesuada semper eu ac diam. Donec id varius augue. Donec
              aliquam auctor bibendum.
            </p>
          </Textblock>
          <Textblock>
            <Heading>Parking Detail</Heading>
            <p>
              Upon entering Marina Del Rey, parking attendants will assist you
              with the convenience of complimentary valet parking.
            </p>
          </Textblock>
        </MapText>
      </MapContainer>
      <Footer />
      <Collage />
      <TextBar
        title="Are you Coming?"
        description="Please let us know if you are going to be able to make it. We'd love
          to see you there, but understand everyone wont' be able to make it."
        href="/rsvp"
        cta="rsvp"
      />
    </>
  );
}

GettingThere.Layout = WithNav;
