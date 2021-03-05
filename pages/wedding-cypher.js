import { useEffect, useContext } from 'react';
import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithPageTitle from '../layouts/withPageTitle';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import TextBar from '../components/textBar';
import Collage from '../components/collage';
import PageTitle from '../components/pageTitle';
import { Container } from '../components/containers';
import styled from 'styled-components';
import People from '../components/people';

import {
  BRIDESMAIDS_TITLE,
  BRIDESMAIDS_INTRO,
  BRIDESMAIDS_QUESTION,
  BRIDESMAIDS,
  GROOMSMEN_TITLE,
  GROOMSMEN_INTRO,
  GROOMSMEN_QUESTION,
  GROOMSMEN,
  PARENTS_TITLE,
  PARENTS_DESC,
  MOTHERS_TITLE,
  FATHERS_TITLE,
  MOTHERS,
  FATHERS
} from '../constants/index';

const Background = styled.section`
  background: linear-gradient(to bottom, #fff9e7 0, #fff 100%);
`;
const TitleContainer = styled(Container)`
  padding: 120px 0 40px;
  text-align: center;
`;

export default function WeddingCypher() {
  const { t } = useTranslation();
  const [locale] = useContext(LanguageContext);
  useEffect(() => {
    setLanguageCookie(null, locale);
  }, []);
  const pageTitle = t('WEDDING_CYPHER_PAGE_TITLE');
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Background>
        <TitleContainer>
          <h2>{t(PARENTS_TITLE.key)}</h2>
          <p>{t(PARENTS_DESC.key)}</p>
        </TitleContainer>

        <TitleContainer>
          <h2>{t(MOTHERS_TITLE.key)}</h2>
        </TitleContainer>
        <People
          people={MOTHERS.map((m) => ({
            ...m,
            title: m.title && t(m.title)
          }))}
        />

        <TitleContainer>
          <h2>{t(FATHERS_TITLE.key)}</h2>
        </TitleContainer>
        <People people={FATHERS} />
        <TitleContainer>
          <h2>{t(BRIDESMAIDS_TITLE.key)}</h2>
          <p style={{ width: '80%', margin: '0 auto' }}>
            {t(BRIDESMAIDS_INTRO.key)}
          </p>
        </TitleContainer>
        <People
          people={BRIDESMAIDS.map((bm) => ({
            ...bm,
            answer: t(bm.answer),
            desc: t(bm.desc)
          }))}
          question={t(BRIDESMAIDS_QUESTION.key)}
        />

        <TitleContainer>
          <h2>{t(GROOMSMEN_TITLE.key)}</h2>
          <p style={{ width: '80%', margin: '0 auto' }}>
            {t(GROOMSMEN_INTRO.key)}
          </p>
        </TitleContainer>
        <People
          people={GROOMSMEN.map((gm) => ({
            ...gm,
            answer: t(gm.answer),
            desc: t(gm.desc)
          }))}
          question={t(GROOMSMEN_QUESTION.key)}
        />
      </Background>

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

WeddingCypher.Layout = WithPageTitle;
