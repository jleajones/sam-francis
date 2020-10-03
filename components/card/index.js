import Link from 'next/link';
import styled from 'styled-components';
import { CardContainer } from '../containers';

const ImgContainer = styled.div`
  height: 70%;
  border-radius: 20px 20px 0 0;
  background: #fff;
  border: solid 1px #f2f2f2;
`;

const TextContainer = styled.div`
  padding-top: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 300;
`;

export default function Card({ description, href, cta }) {
  return (
    <CardContainer>
      <ImgContainer />
      <TextContainer>
        <Description>{description}</Description>
        {href && <Link href={href}>{cta}</Link>}
      </TextContainer>
    </CardContainer>
  );
}
