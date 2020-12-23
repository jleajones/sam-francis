import { useEffect, useContext, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { setLanguageCookie } from '../utils/language';
import WithPageTitle from '../layouts/withPageTitle';
import useTranslation from '../components/hooks/useTranslation';
import { LanguageContext } from '../components/context/LanguageProvider';
import TextBar from '../components/textBar';
import PageTitle from '../components/pageTitle';
import { OUR_STORY_QUESTIONS } from '../constants';
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

  > h2 {
    margin-bottom: 40px;
  }
`;

const Gram = styled.div`
  width: calc(${({ size }) => size}px - 2px);
  height: calc(${({ size }) => size}px - 2px);
  background: #fcfcfc url('${({ url }) => url}.png') no-repeat center;
  background-size: ${({ size }) => size}px auto;
  margin: 1px;

  &:hover {
    border: solid 1px #f2f2f2;
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
      console.log(viewport);
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
        <h2>Over the Years</h2>
        <GramContainer>
          <Gram size={gram} url="os_1" />
          <Gram size={gram} url="os_2" />
          <Gram size={gram} url="os_3" />
          <Gram size={gram} url="os_4" />
          <Gram size={gram} url="os_5" />
          <Gram size={gram} url="os_6" />
          <Gram size={gram} url="os_7" />
          <Gram size={gram} url="os_8" />
          <Gram size={gram} url="os_9" />
          <Gram size={gram} url="os_10" />
          <Gram size={gram} url="os_11" />
          <Gram size={gram} url="os_12" />
          <Gram size={gram} url="os_13" />
          <Gram size={gram} url="os_14" />
          <Gram size={gram} url="os_15" />
          <Gram size={gram} url="os_16" />
          <Gram size={gram} url="os_17" />
          <Gram size={gram} url="os_18" />
        </GramContainer>
      </GramSection>
    </>
  );
}

OurStory.Layout = WithPageTitle;
