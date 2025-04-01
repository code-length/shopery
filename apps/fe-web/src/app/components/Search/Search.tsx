import styles from './Search.module.scss';

export default function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.inputWrapper}>
        <input type='text' placeholder='Search' />
      </div>
      <button className={styles.btn}>Search</button>
    </div>
  );
}
