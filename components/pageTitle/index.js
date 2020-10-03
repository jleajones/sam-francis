import styled from 'styled-components';
import { Container } from '../containers';
const StyledPageTitle = styled.section`
  height: 180px;
  border-bottom: solid 4px ${({ theme }) => theme.colors.accent};
`;

const Title = styled.h1`
  font-size: 48px;
  line-height: 180px;
  letter-spacing: 4px;
  text-transform: capitalize;
`;

export default function PageTitle({ title }) {
  return (
    <StyledPageTitle>
      <Container>
        <Title>{title}</Title>
      </Container>
    </StyledPageTitle>
  );
}
