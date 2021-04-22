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
  OUR_STORY_QUESTIONS,
  OUR_STORY_IMG
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
  background-position: 50% 0;
  background-size: 100% auto;

  @media (min-width: 1024px) {
    background-position: 0 0;
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

const GramText = styled.span`
  display: block;
  margin: 0 auto;
  width: 55%;
`;

const QuestionContainer = styled(FlexContainer)`
  background: rgba(255, 255, 255,  0.5);
  padding: 20px;
  margin-top: 590px;
  @media (min-width: 1024px) {
    background: none;
    padding: 0;
    margin-top: 0;
    justify-content: flex-end;
  }
`;

const QuestionIntro = styled.p`

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 100;
`;

const Questions = styled.div`

  @media (min-width: 1024px) {
    width: 50%;
    padding: 40px 10px 40px 40px;

  border-left: solid 1px #fff;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
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
  width: 320px;
  margin: 0 auto;

  @media (min-width: 1024px) {

    width: calc(${({ size }) => size}px - 2px);
    margin: 1px 1px 20px 1px;
  }

  &:hover {
  }
  > div {
    background: #fcfcfc url('${({ url }) => url}.png') no-repeat center;
    height: 320px;
    background-size: 100% auto;


    @media (min-width: 1024px) {
      background-size: ${({ size }) => size}px auto;
      height: calc(${({ size }) => size}px - 2px);
    }
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
          {OUR_STORY_IMG.map(img => (
            <Gram size={gram} url={img.url}>
              <div />
              <p>
                <GramText>
                  {t(img.text.key)}
                </GramText>
              </p>
            </Gram>
          ))}
        </GramContainer>
      </GramSection>
    </>
  );
}

OurStory.Layout = WithPageTitle;
