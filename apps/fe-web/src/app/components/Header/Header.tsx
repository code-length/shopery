import CallNow from '../CallNow/CallNow';
import Midle from '../Midle/Midle';
import NavLinks from '../NavLinks/NavLinks';
import SmallOne from '../SmallOne/SmallOne';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <div>
      <div className={styles.smallOne}>
        <SmallOne />
      </div>
      <div className={styles.midle}>
        <Midle />
      </div>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <NavLinks />
          <CallNow />
        </nav>
      </div>
    </div>
  );
}
