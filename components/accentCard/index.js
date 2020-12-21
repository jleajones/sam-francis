import Link from 'next/link';
import styled, { css } from 'styled-components';
import { CardContainer } from '../containers';

const AccentCardContainer = styled(CardContainer)`
  text-align: center;
  flex-grow: 2;

  > div {
    padding: 10px 40px 20px;
    border-radius: 20px;
    ${(props) =>
      props.accent &&
      css`
        background: ${({ theme }) => theme.colors.accentLight};
        border: none;
      `}
  }
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 40px;
`;

const Heading = styled.h5`
  font-size: 18px;
  margin-bottom: 40px;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto 40px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  font-weight: 300;
`;

export default function AccentCard({
  accent,
  title,
  heading,
  imgUrl,
  description,
  href,
  cta
}) {
  return (
    <AccentCardContainer accent={accent}>
      <div>
        <Title>{title}</Title>
        <Image src={`/${imgUrl.toLowerCase()}.svg`} />
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
        {href && <Link href={href}>{cta}</Link>}
      </div>
    </AccentCardContainer>
  );
}
