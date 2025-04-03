import styles from './Price.module.scss';

interface PriceProps {
  total: string;
}

export default function Price({ total }: PriceProps) {
  return <span className={styles.price}>{total}</span>;
}
