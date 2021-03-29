import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Gutter from '../components/gutter';

const StyledHeader = styled(Header)`
   {
    position: absolute;
  }
`;

const StyledMain = styled.main`
  overflow: ${({ showMenu }) => showMenu ? `hidden` : `auto`};
`;

export default function WithNav({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuClickHandler = (e) => {
    setShowMenu(!showMenu);
    setMenuHeight(window.innerHeight)
  };
  return (
    <StyledMain>
      <StyledHeader menuClickHandler={menuClickHandler} showMenu={showMenu} menuHeight={menuHeight}/>
      {children}
      <Gutter />
    </StyledMain>
  );
}

WithNav.propTypes = {
  children: PropTypes.node.isRequired
};
