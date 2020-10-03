import Button from '../button';
import Link from 'next/Link';
import styled from 'styled-components';
import { SpaceBetweenContainer } from '../containers';

const StyledTextBar = styled.div`
  border-top: solid 1px #fff;
  background: #000;
  padding: 40px 0;
  color: #fff;
`;

const StyledLink = styled.a`
  color: #fff;
  font-weight: bold;
`;

const Title = styled.h5`
  color: #fff;
  font-size: 30px;
  width: 15%;
`;

const Description = styled.p`
  color: #fff;
  width: 60%;
`;

const RsvpButton = styled(Button)`
  width: 190px;
`;

export default function TextBar({ title, description, href, cta }) {
  return (
    <StyledTextBar>
      <SpaceBetweenContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {href && (
          <RsvpButton>
            <Link href={href}>
              <StyledLink>{cta}</StyledLink>
            </Link>
          </RsvpButton>
        )}
      </SpaceBetweenContainer>
    </StyledTextBar>
  );
}
