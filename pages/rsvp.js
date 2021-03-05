import { useEffect, useContext, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithPageTitle from '../layouts/withPageTitle';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import RsvpForm from '../components/rsvpForm';
import { HeroWithText } from '../components/hero';
import {
  Container,
  FlexContainer,
  SpaceBetweenContainer
} from '../components/containers';
import Button from '../components/button';
import Footer from '../components/footer';

const Form = styled(Container)`
  padding: 120px 0 160px;

  > div {
    flex-grow: 1;
  }
`;

export default function Rsvp() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [locale] = useContext(LanguageContext);
  useEffect(() => {
    setLanguageCookie(null, locale);
  }, []);
  const pageTitle = t('RSVP_PAGE_TITLE');

  const onSubmit = (formData) => {
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <HeroWithText
        title="<span>Are you coming?</span>"
        onClick={() => {
          document.getElementById('form').scrollIntoView({
            behavior: 'smooth'
          });
        }}
        cta="RSVP"
        message="<span>MARINA DEL REY</span><br/>JULY 1ST, 2021 at 5:15PM"
        bgImage={'rsvp_bg.png'}
      />
      <Form>
        <h2 style={{ marginBottom: '20px' }}>
          Please confirm your presence by May 1st, 2021
        </h2>
        <p style={{ marginBottom: '40px', width: '80%' }}>
          Due to restrictions, we ask that you please only RSVP for yourself and
          if there is another person listed on your invitation. Please note,
          invitations are for 21 and over. Many thanks for your understanding.
        </p>
        <p
          style={{
            marginBottom: '40px',
            background: 'red',
            color: 'white',
            maxWidth: '80%',
            padding: '16px 8px',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <span style={{ marginRight: '12px', color: '#fff' }}>
            <img src="/info-24px.svg" />
          </span>
          <em style={{ flexGrow: 2 }}>
            Due to COVID-19 and the current social unrest in the world, we ask
            that you please be patient and flexible with us. If there are any
            changes to the wedding date or details, we will be sure to
            communicate this with you as soon as possible. Thank you!.
          </em>
        </p>
        <RsvpForm onSubmit={onSubmit} />

        <div style={{ display: isSubmitted ? 'block' : 'none' }}>
          <h5>Thank you for your RSVP.</h5>
          <p>
            Please visit the{' '}
            <Link href="/getting-there">"Getting There" page</Link> if you plan
            to attend and check out the FAQs below.
          </p>
        </div>
      </Form>
      {/*<Footer />*/}
      {/*<Collage />*/}
    </>
  );
}

Rsvp.Layout = WithPageTitle;
