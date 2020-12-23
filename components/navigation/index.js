import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslation';
import { useRouter } from 'next/router';
import { SMALL } from '../../constants';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const NavItem = styled.div`
  padding: 0 20px;
  text-align: right;

  &:last-of-type {
    padding-right: 0;
  }
`;

const StyledLink = styled.a`
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  font-size: ${({ size }) => (size === SMALL ? `12px` : `18px`)};
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

const NavigationItem = ({ slug, href, size }) => {
  const { t } = useTranslation();
  const router = useRouter();

  let selected;
  console.log(href);
  console.log(router.pathname);
  if (router.pathname === href) {
    selected = 'selected';
  }

  return (
    <NavItem size={size}>
      <Link href={href}>
        <StyledLink selected={selected} size={size}>
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

export default function Navigation({ items, size }) {
  return (
    <NavContainer size={size}>
      {items.map((item) => (
        <NavigationItem
          key={item.key}
          slug={item.key}
          href={item.slug}
          size={size}
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
