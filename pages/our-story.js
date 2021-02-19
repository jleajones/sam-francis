import { useEffect, useContext, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { setLanguageCookie } from '../utils/language';
import WithPageTitle from '../layouts/withPageTitle';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import {
  OVER_THE_YEARS,
  OUR_STORY_INTRO,
  OUR_STORY_QUESTIONS
} from '../constants';
import Question from '../components/question';
import { FlexContainer } from '../components/containers';

const Background = styled.section`
  background: linear-gradient(to top, #fff9e7 0, #fff 100%);
`;

const BackgroundImage = styled.section`
  display: flex;
  flex-direction: column;
  background: url('/our_story.png') no-repeat;
  @media (min-width: 1024px) {
    flex-direction: row;
    background-size: 50% 100%;
    justify-content: flex-end;
    height: ${({ width }) => width * 1.7}px;
  }
`;

const GramContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  flex-direction: row;
`;

const QuestionContainer = styled(FlexContainer)`
  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

const QuestionIntro = styled.p`
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 100;
`;

const Questions = styled.div`
  border-left: solid 1px #fff;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 50%;
    padding: 40px 10px 40px 40px;
  }
`;

const GramSection = styled.section`
  text-align: center;
  padding: 120px 0 180px;
  background: #efefef;

  > h2 {
    margin-bottom: 40px;
  }
`;

const Gram = styled.div`
  width: calc(${({ size }) => size}px - 2px);
  margin: 1px 1px 20px 1px;

  &:hover {
  }
  > div {
    height: calc(${({ size }) => size}px - 2px);
    background: #fcfcfc url('${({ url }) => url}.png') no-repeat center;
    background-size: ${({ size }) => size}px auto;
  }

  > p {
    width: 100%;
    background: rgba(255, 255, 255, 0.7);
    padding: 40px 0;
  }
`;

export default function OurStory() {
  const { t } = useTranslation();
  const [locale] = useContext(LanguageContext);
  const [width, setWidth] = useState(0);
  const [gram, setGram] = useState(200);

  const updateGramSize = (viewport) => {
    if (window.innerWidth > 1024) {
      let containerSize = viewport * 0.85;

      if (containerSize >= 1280) {
        containerSize = 1280;
      }
      setGram(containerSize / 3);
    } else {
      setGram(viewport / 2);
    }
  };

  useEffect(() => {
    const viewport = document.documentElement.clientWidth;
    setLanguageCookie(null, locale);
    setWidth(viewport / 2);

    window.addEventListener('resize', () => {
      const viewport = document.documentElement.clientWidth;
      setWidth(viewport / 2);
    });

    updateGramSize(viewport);

    window.addEventListener('resize', () => {
      const viewport = document.documentElement.clientWidth;
      updateGramSize(viewport);
    });
  }, []);
  const pageTitle = t('OUR_STORY_PAGE_TITLE');
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Background>
        <BackgroundImage width={width}>
          <QuestionContainer>
            <Questions>
              <QuestionIntro>{t(OUR_STORY_INTRO.key)}</QuestionIntro>
              {OUR_STORY_QUESTIONS.map((question) => (
                <Question
                  key={question.key}
                  questionKey={question.questionKey}
                  brideKey={question.brideKey}
                  groomKey={question.groomKey}
                />
              ))}
            </Questions>
          </QuestionContainer>
        </BackgroundImage>
      </Background>
      <GramSection>
        <h2>{t(OVER_THE_YEARS.key)}</h2>
        <GramContainer>
          <Gram size={gram} url="os_1">
            <div />
            <p>Pacha Nightclub for Francis' 21st Birthday, November 2009</p>
          </Gram>
          <Gram size={gram} url="os_2">
            <div />
            <p>Sam visiting Francis at Syracuse University, Spring 2009</p>
          </Gram>
          <Gram size={gram} url="os_3">
            <div />
            <p>Bowling @ New Roc City, December 2010</p>
          </Gram>
          <Gram size={gram} url="os_4">
            <div />
            <p>Birthday Party Pregame, November 2011</p>
          </Gram>
          <Gram size={gram} url="os_5">
            <div />
            <p>Out & About, March 2011</p>
          </Gram>
          <Gram size={gram} url="os_6">
            <div />
            <p>Princess and the Frog, Halloween 2012</p>
          </Gram>
          <Gram size={gram} url="os_7">
            <div />
            <p>Sam's Surprise 25th Birthday Party, March 2012</p>
          </Gram>
          <Gram size={gram} url="os_8">
            <div />
            <p>Storm and Jerome in the House, Halloween 2013</p>
          </Gram>
          <Gram size={gram} url="os_9">
            <div />
            <p>Rooftop Brunch Things, May 2014</p>
          </Gram>
          <Gram size={gram} url="os_10">
            <div />
            <p>ATV Riding in Florida, November 2015</p>
          </Gram>
          <Gram size={gram} url="os_11">
            <div />
            <p>Volcan Arenal in Costa Rica, December 2016</p>
          </Gram>
          <Gram size={gram} url="os_12">
            <div />
            <p>Kendrick Lamar Concert, July 2017.png</p>
          </Gram>
          <Gram size={gram} url="os_13">
            <div />
            <p>Elephant Sanctuary in Thailand, February 2018</p>
          </Gram>
          <Gram size={gram} url="os_14">
            <div />
            <p>Engagement Day, October 2018</p>
          </Gram>
          <Gram size={gram} url="os_15">
            <div />
            <p>Legends Suites at the Yankees Game, July 2018</p>
          </Gram>
          <Gram size={gram} url="os_16">
            <div />
            <p>Eiffel Tower in Paris, May 2019</p>
          </Gram>
          <Gram size={gram} url="os_17">
            <div />
            <p>Engagement Photos Behind the Scenes, August 2020</p>
          </Gram>
          <Gram size={gram} url="os_18">
            <div />
            <p>Marina Del Rey, Bronx NY, July 1st 2020</p>
          </Gram>
        </GramContainer>
      </GramSection>
    </>
  );
}

OurStory.Layout = WithPageTitle;
