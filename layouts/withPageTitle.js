import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Gutter from '../components/gutter';

const StyledHeader = styled(Header)`
   {
    background: #000;
    box-shadow: 0 2px 8px 5px rgba(0, 0, 0, 0.5);
    z-index: 999;
    position: relative;
  }
`;

export default function WithNav({ children }) {
  return (
    <main>
      <StyledHeader />
      {children}
      <Gutter />
    </main>
  );
}

WithNav.propTypes = {
  children: PropTypes.node.isRequired
};
