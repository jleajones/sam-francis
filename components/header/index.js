import Link from 'next/link';
import Navigation from '../navigation';
import { NAVIGATION_ITEMS } from '../../constants';
import styled from 'styled-components';
import { SpaceBetweenContainer } from '../containers';

// const NavContainer = styled(FlexContainer)``;

const StyledHeader = styled.header`
  width: 100%;
  padding: 10px 0;
`;

const HeaderContainer = styled(SpaceBetweenContainer)`
  align-items: center;
`;

const Logo = styled.div`
  width: 90px;
  height: 90px;
  background: url('logo.png') no-repeat;
  background-size: contain;
  a {
    text-indent: -99999px;
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export default function Header({ className }) {
  return (
    <StyledHeader className={className}>
      <HeaderContainer>
        <Logo>
          <Link href="/">link</Link>
        </Logo>
        <Navigation items={NAVIGATION_ITEMS} />
      </HeaderContainer>
    </StyledHeader>
  );
}
