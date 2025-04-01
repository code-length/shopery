import Image from 'next/image';
import Phone from '../../assets/images/PhoneCall.svg';

import styles from './CallNow.module.scss';

export default function CallNow() {
  return (
    <div className={styles.callNow}>
      <Image src={Phone} alt='phone' />
      <a href='tel:2195550114' className={styles.phoneNumber}>
        (219) 555-0114
      </a>
    </div>
  );
}
