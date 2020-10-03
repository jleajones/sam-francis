import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Btn = styled.button`
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-size: 18px;
  text-transform: uppercase;
  padding: 5px 16px 4px;
  letter-spacing: 3px;
  font-family: inherit;
  border: solid 1px ${({ theme }) => theme.colors.accentDark};
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;

  &:hover {
    background: ${({ theme }) => theme.colors.accentDark};
  }
  ${(props) =>
    props.ghost &&
    css`
      background: none;
      color: ${({ theme }) => theme.colors.accent};
      border: solid 1px ${({ theme }) => theme.colors.accent};

      &:hover {
        background: ${({ theme }) => theme.colors.accent};
        color: #fff;
      }
    `}
`;
export default function Button({ children, onClick, ghost, className }) {
  return (
    <Btn onClick={onClick} ghost={ghost} className={className}>
      {children}
    </Btn>
  );
}
Button.propTypes = {
  ghost: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};
