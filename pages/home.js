import { useEffect, useContext } from 'react';
import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithNav from '../layouts/withNav';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import VerticalPromo from '../components/verticalPromo';
import { HOME_PAGE_PROMOS } from '../constants';
import styled from 'styled-components';
import Cta from '../components/cta';
import { Hero } from '../components/hero';
import Collage from '../components/collage';
import Footer from '../components/footer';
import TextBar from '../components/textBar';
import { FlexContainer, SpaceBetweenContainer } from '../components/containers';

const Promos = styled.section`
  padding: 120px 0 160px;
  background: linear-gradient(to bottom, #fff9e7 0, #fff 100%);
`;

const Ctas = styled.section`
  background: ${({ theme }) => theme.colors.bgLight};
  padding: 40px 0;
`;

export default function Home() {
  const { t } = useTranslation();
  const [locale] = useContext(LanguageContext);

  useEffect(() => {
    setLanguageCookie(null, locale);
  }, []);
  const pageTitle = t('HOME_PAGE_TITLE');
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Hero />
      <Promos>
        <SpaceBetweenContainer>
          {HOME_PAGE_PROMOS.map((promo) => (
            <VerticalPromo
              key={promo.key}
              slug={promo.key}
              title={promo.titleKey}
              heading={promo.headingKey}
              description={promo.descriptionKey}
            />
          ))}
        </SpaceBetweenContainer>
      </Promos>
      <Ctas>
        <FlexContainer>
          {[
            {
              text: 'Please let us know if you are coming.',
              href: '/rsvp',
              cta: 'rsvp'
            },
            {
              text: 'Where are we registered?',
              href: '/registry',
              cta: 'view'
            }
          ].map((cta) => (
            <Cta text={cta.text} href={cta.href} key={cta.href} cta={cta.cta} />
          ))}
        </FlexContainer>
      </Ctas>
      <Footer />
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

Home.Layout = WithNav;
