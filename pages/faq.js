import { useEffect, useContext } from 'react';
import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithPageTitle from '../layouts/withPageTitle';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import TextBar from '../components/textBar';
import Collage from '../components/collage';
import PageTitle from '../components/pageTitle';
import Footer from '../components/footer';
import styled from 'styled-components';
import { Container, SpaceBetweenContainer } from '../components/containers';
import {
  FAQS
} from '../constants';

const TitleContainer = styled(Container)`
  padding: 120px 0 40px;
  text-align: center;
`;

const Question = styled.h3`
font-size: 24px;
margin-bottom: 10px;
`;

const Answer = styled.p`
font-size: 18px;
line-height: 28px;
margin-bottom: 10px;
`;


export default function Registry() {
  const { t } = useTranslation();
  const [locale] = useContext(LanguageContext);
  useEffect(() => {
    setLanguageCookie(null, locale);
  }, []);
  const pageTitle = t('FAQ_PAGE_TITLE');
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section style={{ paddingBottom: '40px',
        background: 'linear-gradient(to bottom, #fff9e7 0, #fff 100%)'}}>
        <TitleContainer>
          <h2 style={{ marginBottom: '24px'}}>
            {pageTitle}
          </h2>
        </TitleContainer>
        <Container>
          {FAQS.map(faq =>{
            console.log(faq.q);
            return(
            <div style={{ minWidth: '300px', width: '60%', margin: '0 auto'}}>
              <div style={{ marginBottom: '60px'}}>
                <Question>{t(faq.q.key)}</Question>
                <Answer dangerouslySetInnerHTML={{ __html: t(faq.a.key) }} />
              </div>
            </div>
          )})}
        </Container>
      </section>
      {/*<Footer />*/}
    </>
  );
}

Registry.Layout = WithPageTitle;
