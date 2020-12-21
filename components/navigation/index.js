import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslation';
import { useRouter } from 'next/router';

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
  font-size: 18px;
  cursor: pointer;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  letter-spacing: 2px;
  border-bottom: ${({ selected, theme }) =>
    selected ? `solid 3px ${theme.colors.accent}` : `none`};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NavigationItem = ({ slug, href }) => {
  const { t } = useTranslation();
  const router = useRouter();

  let selected;
  console.log(href);
  console.log(router.pathname);
  if (router.pathname === href) {
    selected = 'selected';
  }

  return (
    <NavItem>
      <Link href={href}>
        <StyledLink selected={selected}>{t(slug)}</StyledLink>
      </Link>
    </NavItem>
  );
};

NavigationItem.propTypes = {
  href: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default function Navigation({ items }) {
  return (
    <NavContainer>
      {items.map((item) => (
        <NavigationItem key={item.key} slug={item.key} href={item.slug} />
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
  ).isRequired
};
