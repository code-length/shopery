import Link from 'next/link';

import styles from './NavItem.module.scss';

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
}

export default function NavItem({ href, label, isActive }: NavItemProps) {
  return (
    <li className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
      <Link href={href}>{label}</Link>
    </li>
  );
}
