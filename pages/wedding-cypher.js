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

const BRIDES_QUESTION = 'Name of lip color, if you had one?';

const bridesmaids = [
  {
    name: 'Janelle Martinez',
    title: 'Maid of Honor',
    question: BRIDES_QUESTION,
    answer: 'Boss Swag - always making me feel like a bawse.'
  },
  {
    name: 'Tasha Brown',
    title: 'Bridesmaid',
    question: BRIDES_QUESTION,
    answer: "Get it! It's my motto for 2020!"
  },
  {
    name: 'Claudia Carrero',
    title: 'Bridesmaid',
    question: BRIDES_QUESTION,
    answer: 'Lioness - to feel prideful, strong, and beautiful.'
  },
  {
    name: 'Elizabeth Carrero',
    title: 'Bridesmaid',
    question: BRIDES_QUESTION,
    answer: 'Sunshine - I brighten up any look! 💁🏽‍♀️'
  },
  {
    name: 'Danielle Lea-Jones',
    title: 'Bridesmaid',
    question: BRIDES_QUESTION,
    answer: "Mango Madness - to feel like I'm always on vacation."
  },
  {
    name: 'Yunilda Perez',
    title: 'Bridesmaid',
    question: BRIDES_QUESTION,
    answer:
      'Sophistiratchet - to never forget where I come from and work hard towards a better life.'
  },
  {
    name: 'Christal Pickett',
    title: 'Bridesmaid',
    question: BRIDES_QUESTION,
    answer: 'Cherry Pop - the color red always pops when anyone wears it.'
  },
  {
    name: 'Chantel Santos',
    title: 'Bridesmaid',
    question: BRIDES_QUESTION,
    answer:
      'Ritual - my body care rituals help me get my mind right and make me feel good.'
  },
  {
    name: 'Timeka Tounsel',
    title: 'Bridesmaid',
    question: BRIDES_QUESTION,
    answer:
      'Tuesday Chardonnay - Celebrating natural beauty and simple sophistication.'
  },
  {
    name: 'Jennifer Vasquez',
    title: 'Bridesmaid',
    question: BRIDES_QUESTION,
    answer: 'Warrior Red - to prepare me to beat any challenge with style.'
  }
];

const GROOMS_QUESTION = "If you weren't doing what you do now...";

const groomsmen = [
  {
    name: 'Calvin Wilson',
    title: 'Best Man',
    question: GROOMS_QUESTION,
    answer: "I'd want to own a department store."
  },
  {
    name: 'Daniel “Danny” Lauria',
    title: 'Best Man',
    question: GROOMS_QUESTION,
    answer: "I'd be a boxer or mixed martial artist."
  },
  {
    name: 'King Alexzander',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer: "I'd be a pilot."
  },
  {
    name: 'Duke Isaac',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer: "I'd be a pilot."
  },
  {
    name: 'Jonathan “JO” Olivo',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer: "I'd be the main video editor for a TV show or movie."
  },
  {
    name: 'Sean Pickett',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer:
      "I'd be a digital nomad. I would love to work remotely from different countries."
  },
  {
    name: 'Luis Pinzon',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer: "I'd be a travel blogger."
  },
  {
    name: 'Leon Wilson',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer: "I'd be an A&R for an up and coming Hip Hop/Urban artist."
  },
  {
    name: 'Curtis Yarborough',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer: "I'd be in music production."
  }
];

const parents = [
  {
    name: 'Sean Pickett',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer:
      "I'd be a digital nomad. I would love to work remotely from different countries."
  },
  {
    name: 'Luis Pinzon',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer: "I'd be a travel blogger."
  },
  {
    name: 'Leon Wilson',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer: "I'd be an A&R for an up and coming Hip Hop/Urban artist."
  },
  {
    name: 'Curtis Yarborough',
    title: 'Groomsman',
    question: GROOMS_QUESTION,
    answer: "I'd be in music production."
  }
];
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
          <h2>Meet the Bridesmaids</h2>
          <p>
            Some text about how important these women might be to me...or not.
            haha!
          </p>
        </TitleContainer>
        <People people={bridesmaids} />

        <TitleContainer>
          <h2>Meet the Groomsmen</h2>
          <p>
            Some text about how important these men might be to me...or not.
            haha!
          </p>
        </TitleContainer>
        <People people={groomsmen} />

        <TitleContainer>
          <h2>Meet the Parent</h2>
          <p>Some text about the rents...or maybe not. haha!</p>
        </TitleContainer>
        <People people={parents} />
      </Background>

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

WeddingCypher.Layout = WithPageTitle;
