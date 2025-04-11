import Link from 'next/link';
import Image from 'next/image';

import DropDownIco from '../../assets/images/Navlink-dropdown-ico.svg';
import ActiveDropDownIco from '../../assets/images/Navlink-dropdown-ico-active.svg';

import styles from './NavItem.module.scss';

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  isOption: boolean;
}

export default function NavItem({
  href,
  label,
  isActive,
  isOption,
}: NavItemProps) {
  const dropDown = (
    <Image src={isActive ? ActiveDropDownIco : DropDownIco} alt='drop down' />
  );

  return (
    <>
      <li className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
        <Link href={href}>
          {!isOption ? (
            label
          ) : (
            <div className={styles.labelWithDropdown}>
              {label} {dropDown}
            </div>
          )}
        </Link>
      </li>
    </>
  );
}
