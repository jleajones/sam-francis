import styled from 'styled-components';
import { SpaceBetweenContainer } from '../containers';
import Navigation from '../navigation';
import { NAVIGATION_ITEMS, SMALL } from '../../constants';

const StyledGutter = styled.section`
  border-top: solid 8px ${({ theme }) => theme.colors.accentDark};
  background: #c29a04;
  padding: 20px 0;
  font-size: 10px;
`;

export default function Gutter() {
  return (
    <StyledGutter>
      <SpaceBetweenContainer>
        <Navigation items={NAVIGATION_ITEMS} size={SMALL} />
        <div style={{ color: '#fff', textAlign: 'right'}}>Photography by: King Alexzander (IG: @a1exzart) | Website by: j.leajones</div>
      </SpaceBetweenContainer>
    </StyledGutter>
  );
}
