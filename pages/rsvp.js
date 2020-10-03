import { useEffect, useContext } from 'react';
import styled from 'styled-components';

import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithNav from '../layouts/withNav';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import Collage from '../components/collage';
import PageTitle from '../components/pageTitle';
import { HeroWithText } from '../components/hero';
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
  > textarea {
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
  margin-top: 20px;
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
      <PageTitle title={pageTitle} />
      <HeroWithText
        title="<span>RSVP</span><br/>Please"
        onClick={() => {
          console.log('go to form...');
        }}
        cta="RSVP"
        message="<span>MARINA DEL REY</span><br/>JULY 1ST, 2021 at 5:15PM"
      />
      <Form>
        <h2>Add your details</h2>
        <p style={{ marginBottom: '40px' }}>
          We would love to see you, but totally understand if you cannot make
          it. Please let us know either way, thanks!
        </p>
        <form>
          <Inputs>
            <Input>
              <label htmlFor="firstName">first name</label>
              <input type="text" id="firstName" />
            </Input>
            <Input>
              <label htmlFor="lastName">last name</label>
              <input type="text" id="lastName" />
            </Input>
          </Inputs>
          <Inputs>
            <Input>
              <label htmlFor="party">Number in party</label>
              <input type="text" id="party" />
            </Input>
            <Input>
              <label htmlFor="email">email address</label>
              <input type="text" id="email" />
            </Input>
          </Inputs>
          <TextareaInput>
            <label htmlFor="email">message</label>
            <textarea />
          </TextareaInput>
          <Input>
            <label htmlFor="submit">
              <Button id="submit">Submit</Button>
            </label>
          </Input>
        </form>
      </Form>
      <Footer />
      <Collage />
    </>
  );
}

Rsvp.Layout = WithNav;
