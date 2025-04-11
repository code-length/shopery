import { IconType } from 'react-icons/lib';

import styles from './Payment.module.scss';

import {
  FaCcApplePay,
  FaCcVisa,
  FaCcDiscover,
  FaCcMastercard,
} from 'react-icons/fa';

interface PaymentIcons {
  name: string;
  icon: IconType;
}

const paymentIcons: PaymentIcons[] = [
  {
    name: 'ApplePay',
    icon: FaCcApplePay,
  },
  {
    name: 'Visa',
    icon: FaCcVisa,
  },
  {
    name: 'Discover',
    icon: FaCcDiscover,
  },
  {
    name: 'Mastercard',
    icon: FaCcMastercard,
  },
];

export default function Payment() {
  return (
    <div className={styles.payment}>
      {paymentIcons.map(({ name, icon: Icon }) => (
        <a key={name}>
          <Icon />
        </a>
      ))}
    </div>
  );
}
