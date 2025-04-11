'use client';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Subscribe from './components/Subscribe/Subscribe';
import styles from './page.module.scss';

import { Button } from '@shopery/ui-shared';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className='wrapper'>
        <Header />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}
