import { useEffect, useContext } from 'react';
import Head from 'next/head';
import { setLanguageCookie } from '../utils/language';
import WithNav from '../layouts/withNav';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import TextBar from '../components/textBar';
import Collage from '../components/collage';
import PageTitle from '../components/pageTitle';

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
      <PageTitle title={pageTitle} />
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

WeddingCypher.Layout = WithNav;
