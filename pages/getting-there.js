import { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithPageTitle from '../layouts/withPageTitle';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import TextBar from '../components/textBar';
import Collage from '../components/collage';
import PageTitle from '../components/pageTitle';
import Footer from '../components/footer';
import { FlexContainer } from '../components/containers';

const MapContainer = styled(FlexContainer)`
  padding: 120px 0 160px;
  flex-direction: column;
`;

const Map = styled.div`
  width: 100%;
  border: solid 1px #ccc;
  height: 460px;
  margin-bottom: 40px;
`;

const MapText = styled(FlexContainer)`
  width: 100%;
  border-bottom: solid 1px ${({ theme }) => theme.colors.greyLight};
  padding: 40px 0;

  :last-of-type {
    border: none;
  }
`;

const Textblock = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
  p > b {
    font-family: futura-pt-bold;
  }
  width: 37%;

  :first-of-type {
    width: 25%;
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

        <MapText>
          <Textblock>
            <Heading>Hotel</Heading>
            <p>
              <b>Option 1</b>
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

        <MapText>
          <Textblock>
            <Heading>Hotel</Heading>
            <p>
              <b>Option 2</b>
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
      {/*<Footer />*/}
      {/*<Collage />*/}
      {/*<TextBar*/}
      {/*  title="Are you Coming?"*/}
      {/*  description="Please let us know if you are going to be able to make it. We'd love*/}
      {/*    to see you there, but understand everyone wont' be able to make it."*/}
      {/*  href="/rsvp"*/}
      {/*  cta="rsvp"*/}
      {/*/>*/}
    </>
  );
}

GettingThere.Layout = WithPageTitle;
