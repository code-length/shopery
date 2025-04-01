import Image from 'next/image';

import { Avatar, Badge, Space } from 'antd';

import Logo from '../../assets/images/Logo.svg';
import Search from '../Search/Search';
import Bag from '../../assets/images/Bag.svg';
import Heart from '../../assets/images/Heart.svg';

import styles from './Midle.module.scss';

export default function Midle() {
  return (
    <div className={styles.midle}>
      <Image src={Logo} alt='Ecobazar' />
      <Search />
      <div className={styles.icons}>
        <Image src={Heart} alt='Heart' />
        <span className={styles.divider}>&nbsp;</span>
        <Space size='small'>
          <Badge count={4} showZero className={styles.customBadge}>
            <Avatar shape='square' size='large' src={Bag.src} />
          </Badge>
        </Space>
        <div className={styles.info}>
          <p>Shopping cart:</p>
          <span>$57.00</span>
        </div>
      </div>
    </div>
  );
}
