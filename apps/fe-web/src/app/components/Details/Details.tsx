import Image from 'next/image';
import Account from '../Account/Account';
import Location from '../Location/Location';

import styles from './details.module.scss';
import InfoOption from '../InfoOption/InfoOption';

export default function Details() {
  return (
    <div className={styles.details}>
      <Location />

      <div className={styles.links}>
        <div className={styles.selector}>
          <InfoOption>Eng</InfoOption>
          <InfoOption>USD</InfoOption>
        </div>
        <span className={styles.divider}>|</span>
        <Account />
      </div>
    </div>
  );
}
