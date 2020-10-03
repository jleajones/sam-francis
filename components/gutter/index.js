import styled from 'styled-components';
import { SpaceBetweenContainer } from '../containers';

const StyledGutter = styled.section`
  border-top: solid 8px ${({ theme }) => theme.colors.accentDark};
  background: #c29a04;
  padding: 20px 0;
`;

export default function Gutter() {
  return (
    <StyledGutter>
      <SpaceBetweenContainer>the gutter</SpaceBetweenContainer>
    </StyledGutter>
  );
}
