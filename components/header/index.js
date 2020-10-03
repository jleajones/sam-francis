import Link from 'next/link';
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
