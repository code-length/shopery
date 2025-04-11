import Cta from '../Cta/Cta';
import Logo from '../Logo/Logo';

import styles from './Company.module.scss';

export default function Company() {
  return (
    <div className={styles.company}>
      <Logo colorText='white' />
      <p>
        Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui,
        eget bibendum magna congue nec.
      </p>
      <Cta />
    </div>
  );
}
