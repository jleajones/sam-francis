import { useEffect, useContext } from 'react';
import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithNav from '../layouts/withNav';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import Collage from '../components/collage';
import PageTitle from '../components/pageTitle';
import { HeroWithText } from '../components/hero';

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
      <Collage />
    </>
  );
}

Rsvp.Layout = WithNav;
