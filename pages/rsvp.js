import { useEffect, useContext, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';

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
import {
  RSVP_BUTTON_TITLE,
  RSVP_COVID,
  RSVP_HERO_TITLE,
  RSVP_INTRO,
  RSVP_INTRUCTIONS,
  RSVP_TIME_DESCRIPTION,
  RSVP_SUCCESS,
  RSVP_SUCCESS_MESSAGE,
} from '../constants';

const Form = styled(Container)`
  padding: 120px 0 160px;

  > div {
    flex-grow: 1;
  }
`;

const SuccessMessage = styled.div`
text-align: center;
  h5 {
    font-size: 24px;
    margin-bottom: 12px;
    margin-top: 120px;
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

  const onSubmit = async (formData) => {
    const res = await axios.post('/api/send', {
      ...formData
    });

    if(res.data) {
      setIsSubmitted(true);
      return res.data;
    }
  };


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <HeroWithText
        title={`<span>${t(RSVP_HERO_TITLE.key)}</span>`}
        onClick={() => {
          document.getElementById('form').scrollIntoView({
            behavior: 'smooth'
          });
        }}
        cta={t(RSVP_BUTTON_TITLE.key)}
        message={`<span>MARINA DEL REY</span><br/>${t(RSVP_TIME_DESCRIPTION.key)}`}
        bgImage={'rsvp_bg.png'}
        page="rsvp"
      />
      <Form>
        <h2 style={{ marginBottom: '20px' }}>{t(RSVP_INTRO.key)}</h2>
        <p style={{ marginBottom: '40px', width: '80%', padding: '16px', background: '#ccc', fontSize:
        '18px', lineHeight: '26px',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'flex-start',}}>
          {t(RSVP_INTRUCTIONS.key)}
        </p>
        <p
          style={{
            marginBottom: '40px',
            background: 'red',
            color: 'white',
            maxWidth: '80%',
            padding: '16px',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'flex-start',
            fontSize: '18px',
            lineHeight: '26px'
          }}
        >
          <span style={{ marginRight: '12px', color: '#fff' }}>
            <img src="/info-24px.svg" />
          </span>
          <em
            style={{ flexGrow: 2 }}
            dangerouslySetInnerHTML={{ __html: t(RSVP_COVID.key) }}
          />
        </p>
        <RsvpForm onSubmit={onSubmit} />

        <SuccessMessage style={{ display: isSubmitted ? 'block' : 'none' }}>
          <h5>{t(RSVP_SUCCESS.key)}</h5>
          <p
            dangerouslySetInnerHTML={{ __html: t(RSVP_SUCCESS_MESSAGE.key) }}/>
        </SuccessMessage>
      </Form>
      {/*<Footer />*/}
      {/*<Collage />*/}
    </>
  );
}

Rsvp.Layout = WithPageTitle;
