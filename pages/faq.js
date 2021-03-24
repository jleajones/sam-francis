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
          <div style={{ minWidth: '300px', width: '60%', margin: '0 auto'}}>
            <div style={{ marginBottom: '30px'}}>
              <h3>When should I RSVP?</h3>
              <p>Please RSVP by May 1st, 2021 and let us know if you will or won’t be able to attend the celebration.</p>
            </div>
          </div>


          <div style={{ minWidth: '300px', width: '60%', margin: '0 auto'}}>
            <div style={{ marginBottom: '30px'}}>
              <h3>Can I bring a date?</h3>
              <p>Though we would love to have you bring a plus one, unfortunately, seats are limited. Your invitation is for you, unless otherwise noted. Thank you for your understanding!</p>
            </div>
          </div>


          <div style={{ minWidth: '300px', width: '60%', margin: '0 auto'}}>
            <div style={{ marginBottom: '30px'}}>
              <h3>Are kids welcome?</h3>
              <p style={{ marginBottom: '10px'}}>Even though we love the kids, our wedding celebration is going to be for 21 and over.</p>
              <p>For those with little ones, we appreciate you making arrangements ahead of time so you can celebrate with us.</p>
            </div>
          </div>


          <div style={{ minWidth: '300px', width: '60%', margin: '0 auto'}}>
            <div style={{ marginBottom: '30px'}}>
              <h3>How is the venue enforcing COVID-19 safety guidelines?</h3>
              <p style={{ marginBottom: '10px'}}>Under New York State guidelines, Marina Del Rey is only allowed to operate at 50% capacity.</p>
              <p style={{ marginBottom: '10px'}}>New York State regulations are allowing wedding celebrations provided that everyone on site has proof of a negative COVID-19 test taken within 48-72 hours prior to the event. You and everyone else in attendance will have to show proof of a negative COVID-19 test on printed paper or on your mobile device upon arrival to Marina Del Rey.</p>
              <p>They also have hand sanitizers throughout their space and are constantly disinfecting all door knobs and restrooms. Additionally, guests are required to wear masks when they are not at their seats.</p>
            </div>
          </div>


          <div style={{ minWidth: '300px', width: '60%', margin: '0 auto'}}>
            <div style={{ marginBottom: '30px'}}>
              <h3>What is the dress code?</h3>
              <p style={{ marginBottom: '10px'}}>The dress code is chic formal attire! What does that mean? Just look fabulous and fashionable in formal attire.</p>
              <p style={{ marginBottom: '10px'}}>We know it’s probably been a while since most of us have gotten all glammed up due to COVID-19. Here’s a chance to show up and show out!</p>
              <p style={{ marginBottom: '10px'}}>Please don’t wear white, all black or gold as these are our wedding colors.</p>
            </div>
          </div>


          <div style={{ minWidth: '300px', width: '60%', margin: '0 auto'}}>
            <div style={{ marginBottom: '30px'}}>
              <h3>Will you be able to  accommodate my diet restrictions?</h3>
              <p style={{ marginBottom: '10px'}}>Yes! We have selected a variety of scrumptious food that caters to meat eaters, pescatarians, vegetarians and vegans.</p>
              <p>Additionally, the menu will also include options for those who drink bubbly and wine as well as those of you who prefer something a little stronger or simply want a soft drink.</p>
            </div>
          </div>


          <div style={{ minWidth: '300px', width: '60%', margin: '0 auto'}}>
            <div style={{ marginBottom: '30px'}}>
              <h3>Who should I contact if I have any other questions? </h3>
              <p>Please send us an email at samuelfrancis1119@gmail.com.</p>
            </div>
          </div>

        </Container>
      </section>
      {/*<Footer />*/}
    </>
  );
}

Registry.Layout = WithPageTitle;
