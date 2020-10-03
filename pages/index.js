import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/Link';
import { useRouter } from 'next/router';

import { useContext } from 'react';
import { LanguageContext } from '../components/context/LanguageProvider';
import useTranslation from '../components/hooks/useTranslation';
import { LANGUAGES } from '../constants';
import Button from '../components/button';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

const Bg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #ddddde;
  text-align: center;
`;

const BigLogo = styled.div`
  height: 235px;
  width: 235px;
  margin: 80px auto 50px;
  border: solid 1px ${({ theme }) => theme.colors.accent};
`;

const HashTag = styled.p`
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 50px;
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;

  button:first-of-type {
    margin-right: 10px;
  }

  button:last-of-type {
    margin-left: 10px;
  }
`;

export default function Splash() {
  const router = useRouter();
  const { t } = useTranslation();
  const [, setLocale] = useContext(LanguageContext);

  const onClickHandler = (e) => {
    if (e.target.innerText.toLowerCase() === 'spanish') {
      setLocale(LANGUAGES.ES);
    } else {
      setLocale(LANGUAGES.EN);
    }

    router.push('/home');
  };
  return (
    <>
      <Head>
        <title>{t('ROOT_PAGE_TITLE')}</title>
      </Head>

      <Bg>
        <BigLogo>
          <Link href="/">Sam&Fran</Link>
        </BigLogo>
        <HashTag>
          <Link href="https://instagram.com">#somehashtag</Link>
        </HashTag>

        <Buttons>
          <Button onClick={onClickHandler} ghost>
            english
          </Button>
          <Button onClick={onClickHandler} ghost>
            spanish
          </Button>
        </Buttons>
      </Bg>
    </>
  );
}
