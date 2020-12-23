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

const TitleContainer = styled(Container)`
  padding: 120px 0 40px;
  text-align: center;
`;

export default function Registry() {
  const { t } = useTranslation();
  const [locale] = useContext(LanguageContext);
  useEffect(() => {
    setLanguageCookie(null, locale);
  }, []);
  const pageTitle = t('REGISTRY_PAGE_TITLE');
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section>
        <TitleContainer>
          <h2>
            Celebrating with you on our special day is the only gift we require.
          </h2>
          <p>
            However, for your convenience, we have registered at [STORE NAMES]
            for the items we’d find the most useful as we prepare for married
            life! You can view the links below.
          </p>
        </TitleContainer>
        <SpaceBetweenContainer>
          <a href="http://goolg.com">Google</a>
          <a href="http://goolg.com">Google</a>
          <a href="http://goolg.com">Google</a>
        </SpaceBetweenContainer>
      </section>
      {/*<Footer />*/}
      <Collage />
      <TextBar
        title="Are you Coming?"
        description="Please let us know if you are going to be able to make it. We'd love
          to see you there, but understand everyone wont' be able to make it."
        href="/rsvp"
        cta="rsvp"
      />
    </>
  );
}

Registry.Layout = WithPageTitle;
