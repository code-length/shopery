import CallNow from '../CallNow/CallNow';
import HeaderActions from '../HeaderActions/HeaderActions';
import NavLinks from '../NavLinks/NavLinks';
import Details from '../Details/Details';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <div>
      <div className={styles.details}>
        <Details />
      </div>
      <div className={styles.infoOption}>
        <HeaderActions />
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
