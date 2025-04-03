'use client';

import Header from './components/Header/Header';
import styles from './page.module.scss';

import { Button } from '@shopery/ui-shared';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className='wrapper'>
        <Header />
        <div className='container'>
          <div id='welcome'>
            <h1>
              <span> Hello there, </span>
              Welcome fe-web 👋
            </h1>
          </div>
          <Button
            onClick={() => console.log('test')}
            variant='ghost'
            size='medium'
          >
            Test
          </Button>
        </div>
      </div>
    </div>
  );
}
