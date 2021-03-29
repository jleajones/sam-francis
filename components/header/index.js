import Link from 'next/link';
import Navigation from '../navigation';
import { NAVIGATION_ITEMS } from '../../constants';
import styled from 'styled-components';
import { SpaceBetweenContainer } from '../containers';
import { useState } from 'react';

// const NavContainer = styled(FlexContainer)``;

const StyledHeader = styled.header`
  width: 100%;
  padding: 10px 0;
  height: ${({ showMenu, menuHeight }) => showMenu ? `${menuHeight}px` : `auto`} !important;
  overflow: ${({ showMenu }) => showMenu ? `hidden` : `auto`};
`;

const HeaderContainer = styled(SpaceBetweenContainer)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 90px;
  height: 90px;
  background: url('logo.png') no-repeat;
  background-size: contain;
  flex-grow: 1;
  a {
    text-indent: -99999px;
    display: block;
    height: 100%;
    width: 100%;
  }
`;

const NavMenu = styled.img`
  cursor: pointer;
  width: 45px;

  @media (min-width: 1060px) {
    display: none;
  }
`;

const MobileNavigation = styled(Navigation)`
  @media (min-width: 1060px) {
    display: none !important;
  }
`;

export default function Header({ className, menuClickHandler, showMenu, menuHeight, hideMenu }) {
  return (
    <StyledHeader className={className} showMenu={showMenu} menuHeight={menuHeight}>
      <HeaderContainer>
        <Logo>
          <Link href="/">link</Link>
        </Logo>

        <NavMenu src={`/menu-24px.svg`} onClick={menuClickHandler}/>
        <Navigation items={NAVIGATION_ITEMS}/>
      </HeaderContainer>
      <MobileNavigation items={NAVIGATION_ITEMS} showMenu={showMenu} hideMenu={hideMenu}/>
    </StyledHeader>
  );
}
