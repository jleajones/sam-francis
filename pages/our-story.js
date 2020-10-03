import { useEffect, useContext, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { setLanguageCookie } from '../utils/language';
import WithNav from '../layouts/withNav';
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
  padding: 120px 0 180px;
`;

const Gram = styled.div`
  background: #fcfcfc;
  width: calc(${({ size }) => size}px - 2px);
  height: calc(${({ size }) => size}px - 2px);
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
      setGram(containerSize / 4);
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
      <PageTitle title={pageTitle} />
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
        <h2>Over the years</h2>
        <GramContainer>
          <Gram size={gram} />
          <Gram size={gram} />
          <Gram size={gram} />
          <Gram size={gram} />
          <Gram size={gram} />
          <Gram size={gram} />
          <Gram size={gram} />
          <Gram size={gram} />
          <Gram size={gram} />
          <Gram size={gram} />
          <Gram size={gram} />
          <Gram size={gram} />
        </GramContainer>
      </GramSection>
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

OurStory.Layout = WithNav;
