import Link from 'next/Link';
import Navigation from '../navigation';
import { NAVIGATION_ITEMS } from '../../constants';

export default function Header({ className }) {
  return (
    <header className={className}>
      <Link href="/">Sam&Fran</Link>
      <Navigation items={NAVIGATION_ITEMS} />
    </header>
  );
}
