import Image from 'next/image';
import LogoIcon from '../../assets/images/Logo.svg';

import styles from './Logo.module.scss';

interface LogoProps {
  colorText?: 'black' | 'white';
}

export default function Logo({ colorText = 'black' }: LogoProps) {
  return (
    <div className={styles.logo}>
      <Image src={LogoIcon} alt='Ecobazar' />
      <span className={colorText === 'white' ? styles.headingWhite : ''}>
        <h6>Ecobazar</h6>
      </span>
    </div>
  );
}
