import { useEffect, useContext } from 'react';
import styled from 'styled-components';

import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithPageTitle from '../layouts/withPageTitle';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import Collage from '../components/collage';
import PageTitle from '../components/pageTitle';
import { Hero, HeroWithText } from '../components/hero';
import { Container } from '../components/containers';
import Button from '../components/button';
import Footer from '../components/footer';

const Form = styled(Container)`
  padding: 120px 0 160px;

  > div {
    flex-grow: 1;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  } ;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  position: relative;
  flex-grow: 1;

  > label {
    font-size: 12px;
    text-transform: capitalize;
    position: absolute;
    top: -10px;
    color: #999;
  }

  > input,
  > textarea,
  > select {
    font-size: 32px;
    font-family: 'futura-pt';
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  > input {
    padding: 10px 0 0;
    line-height: 20px;
    border: none;
    border-bottom: solid 1px #ccc;

    @media (min-width: 1024px) {
      width: calc(100% - 40px);
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  } ;
`;

const TextareaInput = styled(Input)`
  display: block;
  margin-top: 20px;
  > p {
    color: #999;
  }
  > textarea {
    width: 100%;
    margin-top: 10px;
    padding: 0;
    border: solid 1px #ccc;
    line-height: 40px;
    resize: none;
    height: 240px;

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export default function Rsvp() {
  const { t } = useTranslation();
  const [locale] = useContext(LanguageContext);
  useEffect(() => {
    setLanguageCookie(null, locale);
  }, []);
  const pageTitle = t('RSVP_PAGE_TITLE');
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
        <form id="form">
          <Inputs>
            <Input>
              <label htmlFor="firstName">first name</label>
              <input type="text" id="firstName" />
            </Input>
            <Input>
              <label htmlFor="lastName">last name</label>
              <input type="text" id="lastName" />
            </Input>
            <Input>
              <label htmlFor="firstName_guest">first name</label>
              <input type="text" id="firstName_guest" />
            </Input>
            <Input>
              <label htmlFor="lastName_guest">last name</label>
              <input type="text" id="lastName_guest" />
            </Input>
          </Inputs>
          <Inputs>
            <Input>
              <label htmlFor="email">email address</label>
              <input type="text" id="email" />
            </Input>
            <Input>
              <label htmlFor="email">email address</label>
              <input type="text" id="email_guest" />
            </Input>
          </Inputs>
          <Inputs>
            <Input>
              <label htmlFor="yes">
                <input type="checkbox" id="yes" /> Yes, I'm in there!
              </label>
            </Input>
            <Input>
              <label htmlFor="no">
                <input type="checkbox" id="no" /> I'd love to be there, but I
                won't be able to make it.
              </label>
            </Input>
            <Input>
              <label htmlFor="yes_guest">
                <input type="checkbox" id="yes_guest" /> Yes, I'm in there!
              </label>
            </Input>
            <Input>
              <label htmlFor="no_guest">
                <input type="checkbox" id="no_guest" /> I'd love to be there,
                but I won't be able to make it.
              </label>
            </Input>
          </Inputs>
          <TextareaInput>
            <p>
              Leave us a message, advice or any suggestions on fun and new
              things we can do as we enter our marriage!
            </p>
            <textarea />
          </TextareaInput>
          <Input>
            <label htmlFor="submit">
              <Button id="submit">Submit</Button>
            </label>
          </Input>
        </form>
      </Form>
      {/*<Footer />*/}
      {/*<Collage />*/}
    </>
  );
}

Rsvp.Layout = WithPageTitle;
