import Image from 'next/image';
import Phone from '../../assets/images/PhoneCall.svg';

import styles from './CallNow.module.scss';

const phoneNumber = 2195550114;
const phoneDisplay = '(219) 555-0114';

export default function CallNow() {
  return (
    <a className={styles.callNow} href={`tel:${phoneNumber}`}>
      <Image src={Phone} alt='phone' />
      <span className={styles.phoneNumber}>{phoneDisplay}</span>
    </a>
  );
}
