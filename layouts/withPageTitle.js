import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Gutter from '../components/gutter';
import { useState } from 'react';

const StyledHeader = styled(Header)`
   {
    background: #000;
    box-shadow: 0 2px 8px 5px rgba(0, 0, 0, 0.5);
    z-index: 999;
    position: relative;
  }
`;

const StyledMain = styled.main`
  height: ${({ showMenu, menuHeight }) => showMenu ? `${menuHeight}px` : `auto`} !important;
  overflow: ${({ showMenu }) => showMenu ? `hidden` : `auto`};
`;

export default function WithNav({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuClickHandler = (e) => {
    setShowMenu(!showMenu);
    setMenuHeight(window.innerHeight)
  };

  const hideMenu = () => {
    console.log('HIDING MENU...');
    setShowMenu(false);
  }
  return (
    <StyledMain showMenu={showMenu} menuHeight={menuHeight}>
      <StyledHeader menuClickHandler={menuClickHandler} showMenu={showMenu} menuHeight={menuHeight} hideMenu={hideMenu}/>
      {children}
      <Gutter />
    </StyledMain>
  );
}

WithNav.propTypes = {
  children: PropTypes.node.isRequired
};
