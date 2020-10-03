import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Gutter from '../components/gutter';

const StyledHeader = styled(Header)`
   {
    position: fixed;
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
