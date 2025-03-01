import { PageLayout } from '../layouts';
import { Sidebar } from '../components';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <PageLayout />
    </div>
  );
};

export default App;
