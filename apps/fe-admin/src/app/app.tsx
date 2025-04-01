import { Sidebar } from '../components';
import { PageLayout } from '../layouts';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.Parent}>
      <Sidebar />
      <PageLayout />
    </div>
  );
};

export default App;
