import { useState } from 'react';
import styles from './Search.module.scss';

export default function Search() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.search}>
      <div className={styles.inputWrapper}>
        <input type='text' placeholder='Search' />
      </div>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={isHovered ? `${styles.btn} ${styles.active}` : styles.btn}
      >
        Search
      </button>
    </div>
  );
}
