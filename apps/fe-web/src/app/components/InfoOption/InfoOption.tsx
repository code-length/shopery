import Image from 'next/image';

import DropDownIcon from '../../assets/images/dropdown-ico.svg';

import styles from './InfoOption.module.scss';

export default function InfoOption({ children }) {
  return (
    <div className={styles.optionStyle}>
      <p>{children}</p>
      <Image src={DropDownIcon} alt='Drop Down' />
    </div>
  );
}
