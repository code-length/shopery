import Image from 'next/image';
import MapPin from '../../assets/images/Map Pin.svg';

import styles from './Location.module.scss';

export default function Location() {
  return (
    <div className={styles.location}>
      <Image src={MapPin} alt='map' />
      <p className={styles.text}>
        Store Location: Lincoln- 344, Illinois, Chicago, USA
      </p>
    </div>
  );
}
