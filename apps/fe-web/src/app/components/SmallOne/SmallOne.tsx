import Image from 'next/image';
import Account from '../Account/Account';
import Location from '../Location/Location';

import styles from './SmallOne.module.scss';

import DropDown from '../../assets/images/Drop Down.svg';

export default function SmallOne() {
  return (
    <div className={styles.smallOne}>
      <Location />

      <div className={styles.links}>
        <div className={styles.selector}>
          <div className={styles.option}>
            <p>Eng</p>
            <Image src={DropDown} alt='Drop Down' />
          </div>

          <div className={styles.option}>
            <p>USD</p>
            <Image src={DropDown} alt='Drop Down' />
          </div>
        </div>
        <span className={styles.divider}>|</span>
        <Account />
      </div>
    </div>
  );
}
