import InputSubscribe from '../InputSubscribe/InputSubscribe';
import Newsletter from '../Newsletter/Newsletter';
import SocialMedia from '../SocialMedia/SocialMedia';

import styles from './Subscribe.module.scss';

export default function Subscribe() {
  return (
    <div className={styles.subscribeWrapper}>
      <div className={styles.subscribe}>
        <Newsletter />
        <InputSubscribe />
        <SocialMedia />
      </div>
    </div>
  );
}
