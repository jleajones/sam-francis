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
import { FlexContainer, SpaceBetweenContainer } from '../components/containers';
import Button from '../components/button';
import Link from 'next/link';

const MapContainer = styled(FlexContainer)`
  padding: 120px 0 160px;
  flex-direction: column;
`;

const Map = styled.div`
  width: 100%;
  border: solid 1px #ccc;
  height: 560px;
  margin-bottom: 40px;
  background: url('/map.png') no-repeat;
  background-position: center;
`;

const MapText = styled(SpaceBetweenContainer)`
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
  width: 20%;

  :first-of-type {
    width: 40%;
  }
`;

const Heading = styled.h5`
  font-size: 13px;
  font-family: futura-pt-bold;
  color: #ccc;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

const BookNow = styled(Button)`
  margin-top: 20px;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;
  }
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
            <Heading>{t('GETTING_THERE_VENUE_TEXT')}</Heading>
            <p style={{ marginBottom: '10px' }}>
              <b>Marina Del Rey</b>
            </p>
            <p>1 Marina Dr. Bronx, NY 10465</p>
            <p>718-931-6500</p>
            <p style={{ marginBottom: '20px' }}>
              <a href="https://www.mdrnyc.com/" target="_blank">
                www.mdrnyc.com
              </a>
            </p>
            <Heading>{t('GETTING_THERE_PARKING_TEXT')}</Heading>
            <p>{t('GETTING_THERE_PARKING_DESC')}</p>
          </Textblock>
        </MapText>

        <MapText>
          <Textblock>
            <Heading>{t('GETTING_THERE_ACCOMMODATIONS_TEXT')}</Heading>
            <p
              style={{
                marginBottom: '40px',
                fontSize: '18px',
                lineHeight: '28px'
              }}
            >
              {t('GETTING_THERE_ACCOMMODATIONS_DESC')}
            </p>
            <p>
              <em>{t('GETTING_THERE_ACCOMMODATIONS_NOTE')}</em>
            </p>
          </Textblock>
          <Textblock>
            <p style={{ marginBottom: '10px' }}>
              <b>
                Marriott Residence Inn New York
                <br />
                The Bronx at Metro Center Atrium
              </b>
            </p>
            <p>
              1776 Eastchester Road
              <br />
              Bronx, New York 10461
              <br />
              Group Name: Carrero-Green
              <br />
              <br />
              <em style={{ fontSize: '11px', lineHeight: '12px' }}>
                {t('GETTING_THERE_ACCOMMODATIONS_MARRIOTT')}
              </em>
            </p>

            <BookNow>
              <Link href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1612807718740&key=GRP&app=resvlink">
                {t('GETTING_THERE_ACCOMMODATIONS_CTA')}
              </Link>
            </BookNow>
          </Textblock>
          <Textblock>
            <p style={{ marginBottom: '10px' }}>
              <b>Arthouse Hotel New York City</b>
            </p>
            <p>
              2178 Broadway at West 77th Street
              <br />
              New York, New York 10024
              <br />
              Group Name: Carrero-Green
              <br />
              <br />
              <em style={{ fontSize: '11px', lineHeight: '12px' }}>
                {t('GETTING_THERE_ACCOMMODATIONS_ARTHOUSE')}
              </em>
            </p>

            <BookNow>
              <Link href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1612807718740&key=GRP&app=resvlink">
                {t('GETTING_THERE_ACCOMMODATIONS_CTA')}
              </Link>
            </BookNow>
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
