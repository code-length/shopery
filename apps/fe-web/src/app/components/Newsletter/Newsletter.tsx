import styles from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <span className={styles.heading}>Subcribe our Newsletter</span>
      <p>
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
        Phasellus imperdiet elit eu magna.
      </p>
    </div>
  );
}
