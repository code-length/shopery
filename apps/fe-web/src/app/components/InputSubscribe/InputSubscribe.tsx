import Button from '../Button/Button';
import styles from './InputSubscribe.module.scss';

export default function InputSubscribe() {
  return (
    <div className={styles.inputField}>
      <input type='email' placeholder='Your email address' />
      <div className={styles.buttonInside}>
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}
