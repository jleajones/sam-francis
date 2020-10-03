import Link from 'next/link';
import PropTypes from 'prop-types';
import useTranslation from '../hooks/useTranslation';

export default function Navigation({ items }) {
  const { t } = useTranslation();
  return (
    <ul>
      {items.map((item) => (
        <li key={item.key}>
          <Link href={item.slug}>{t(item.key)}</Link>
        </li>
      ))}
    </ul>
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
