import React from 'react';
import clsx from 'clsx';
import styles from './Navigation.module.scss';
import { useLocation, NavLink } from 'react-router-dom';
import { Link } from '../../types';

interface NavigationProps {
  links: Link[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav>
      <p className={styles.sectionName}>Pages</p>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.name} className={styles.item}>
            <NavLink
              to={link.link}
              className={clsx(styles.link, {
                [styles.active]: isActive(link.link),
              })}
            >
              {link.iconElement}
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
