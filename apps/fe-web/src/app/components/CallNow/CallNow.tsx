import Image from 'next/image';
import Phone from '../../assets/images/PhoneCall.svg';

import styles from './CallNow.module.scss';

const phoneNumber = 2195550114;
const phoneDisplay = '(219) 555-0114';

export default function CallNow() {
  return (
    <div className={styles.callNow}>
      <Image src={Phone} alt='phone' />
      <a href={`tel:${phoneNumber}`} className={styles.phoneNumber}>
        {phoneDisplay}
      </a>
    </div>
  );
}
