import NavItem from '../NavItem/NavItem';

import styles from './NavLinks.module.scss';

const navLinks = [
  { href: '/', label: 'Home', isActive: true },
  { href: '/Shop', label: 'Shop' },
  { href: '/Pages', label: 'Pages' },
  { href: '/Blog', label: 'Blog' },
  { href: '/About Us', label: 'About Us' },
  { href: '/Contact Us', label: 'Contact Us' },
];

export default function NavLinks() {
  return (
    <ul className={styles.navList}>
      {navLinks.map((link) => (
        <NavItem
          key={link.href}
          href={link.href}
          label={link.label}
          isActive={link.isActive}
        />
      ))}
    </ul>
  );
}
