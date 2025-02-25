import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <span>
        <h2>User</h2>
        <img
          src='https://www.svgrepo.com/show/105517/user-icon.svg'
          alt='user-image'
          width={25}
        />
      </span>
    </header>
  );
};

export default Header;
