import Button from '../button';
import Link from 'next/link';
import styled from 'styled-components';
import { SpaceBetweenContainer } from '../containers';

const StyledTextBar = styled.div`
  border-top: solid 1px #fff;
  background: #000;
  padding: 140px 0;
  color: #fff;
`;

const StyledTextBarContainer = styled(SpaceBetweenContainer)`
  align-items: center;
  flex-direction: column;
  width: 760px;
  max-width: 90%;
  text-align: center;
`;

const StyledLink = styled.a`
  color: #fff;
  font-weight: bold;
`;

const Title = styled.h5`
  color: #fff;
  font-size: 30px;
  margin-bottom: 40px;
`;

const Description = styled.p`
  color: #fff;
  font-size: 18px;
  margin-bottom: 80px;
`;

const RsvpButton = styled(Button)`
  width: 190px;
`;

export default function TextBar({ title, description, href, cta }) {
  return (
    <StyledTextBar>
      <StyledTextBarContainer>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {href && (
          <RsvpButton>
            <Link href={href}>
              <StyledLink>{cta}</StyledLink>
            </Link>
          </RsvpButton>
        )}
      </StyledTextBarContainer>
    </StyledTextBar>
  );
}
