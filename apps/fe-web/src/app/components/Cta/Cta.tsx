import styles from './Cta.module.scss';

interface CtaProps {
  numberPhone?: string;
  email?: string;
}

export default function Cta({
  numberPhone = '(219) 555-0114',
  email = 'Proxy@gmail.com',
}: CtaProps) {
  return (
    <div className={styles.cta}>
      <p>{numberPhone}</p>
      <span>or</span>
      <p>{email}</p>
    </div>
  );
}
