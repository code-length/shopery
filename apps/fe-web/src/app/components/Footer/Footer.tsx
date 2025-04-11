import Company from '../Company/Company';
import CopyRight from '../CopyRight/CopyRight';
import Payment from '../Payment/Payment';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <main>
        <div className={styles.company}>
          <Company />
        </div>
        <div className={styles.copy_payment}>
          <CopyRight />
          <Payment />
        </div>
      </main>
    </div>
  );
}
