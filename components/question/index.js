import useTranslation from '../hooks/useTranslation';
import styled from 'styled-components';

const StyledQuestion = styled.div`
  max-width: 600px;
  margin-bottom: 80px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const QuestionText = styled.h2`
  font-size: 24px;
  margin-bottom: 36px;
  color: ${({ theme }) => theme.colors.greyDark};
`;

const Answer = styled.div`
  display: flex;
  margin-bottom: 20px;

  p {
    width: calc(100% - 60px);
  }

  p:first-of-type {
    width: 60px;
    padding-right: 12px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Name = styled.p`
  font-family: 'futura-pt-bold';
  text-decoration: underline;
`;

export default function Question({ questionKey, brideKey, groomKey }) {
  const { t } = useTranslation();
  return (
    <StyledQuestion>
      <QuestionText>
        <span>Q:</span> {t(questionKey)}
      </QuestionText>
      {brideKey && (
        <Answer>
          <Name>Francis:</Name>
          <p dangerouslySetInnerHTML={{ __html: t(brideKey) }} />
        </Answer>
      )}
      {groomKey && (
        <Answer>
          <Name>Sam:</Name>
          <p dangerouslySetInnerHTML={{ __html: t(groomKey) }} />
        </Answer>
      )}
    </StyledQuestion>
  );
}
