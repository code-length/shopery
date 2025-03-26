import PageLayout from '../layouts/PageLayout';
import Sidebar from '../components/Sidebar';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.Parent}>
      <Sidebar />
      <PageLayout />
    </div>
  );
};
};

export default App;
