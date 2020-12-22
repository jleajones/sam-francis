import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Video = styled.video`
  position: relative;
  margin: auto;
  top: 0;
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  top: 0;
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
  text-align: center;
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
        <Video className="videoTag" autoPlay loop muted>
          <source src="/clip_2.mp4" type="video/mp4" />
        </Video>
        <Content>
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
        </Content>
      </Bg>
    </>
  );
}
