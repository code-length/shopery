import { Route, Routes } from 'react-router-dom';
import * as Pages from '../../pages';
import styles from './pageLayout.module.scss';

const pageLayout = () => {
  return (
    <section className={styles.pageLayout}>
      <Routes>
        <Route path='/' element={<Pages.DashboardPage />} />
        <Route path='/products' element={<Pages.ProductPage />} />
        <Route path='/users' element={<Pages.UserPage />} />
        <Route path='/orders' element={<Pages.OrderPage />} />
      </Routes>
    </section>
  );
};

export default pageLayout;
