import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslation';
import { useRouter } from 'next/router';
import { SMALL } from '../../constants';

const NavContainer = styled.nav`
  @media (min-width: 1060px) {
    display: flex;
    flex-direction: row;
  }
`;

const NavItem = styled.div`
  display: ${({ isVisible, size }) => isVisible || size === SMALL ? `block` : `none`};
  text-align: ${({ size }) => size === SMALL ? `left` : `center`};
  padding: ${({ size }) => size === SMALL ? `10px 0` : `25px 0`};
  @media (min-width: 1060px) {
    display: flex;
    padding: 0 15px;
    text-align: right;

    &:last-of-type {
      padding-right: 0;
    }
  }
`;

const StyledLink = styled.a`
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  font-size: ${({ size }) => (size === SMALL ? `12px` : `16px`)};
  cursor: pointer;
  text-shadow: ${({ size }) =>
    size === SMALL ? `none` : `0 0 2px rgba(0, 0, 0, 0.8)`};
  letter-spacing: 2px;
  border-bottom: ${({ selected, size, theme }) =>
    selected && size !== SMALL ? `solid 3px ${theme.colors.accent}` : `none`};
  &:hover {
    color: ${({ theme, size }) =>
      size === SMALL ? '#222' : theme.colors.accent};
  }
`;

const NavigationItem = ({ slug, href, size, isVisible, hideMenu }) => {
  const { t } = useTranslation();
  const router = useRouter();

  let selected;
  if (router.pathname === href) {
    selected = 'selected';
  }

  return (
    <NavItem size={size} isVisible={isVisible}>
      <Link href={href}>
        <StyledLink selected={selected} size={size} onClick={hideMenu}>
          {t(slug)}
        </StyledLink>
      </Link>
    </NavItem>
  );
};

NavigationItem.propTypes = {
  href: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['', SMALL])
};

export default function Navigation({ className, items, size, showMenu, hideMenu }) {
  return (
    <NavContainer size={size} className={className}>
      {items.map((item) => (
        <NavigationItem
          key={item.key}
          slug={item.key}
          href={item.slug}
          size={size}
          isVisible={showMenu}
          hideMenu={hideMenu}
        />
      ))}
    </NavContainer>
  );
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired
    })
  ).isRequired,
  size: PropTypes.oneOf(['', SMALL])
};
