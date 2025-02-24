import PageLayout from '../layouts/PageLayout';
import * as Components from '../components/index';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.Parent}>
      <Components.Sidebar />
      <div>
        <Components.Header />
        <PageLayout />
      </div>
    </div>
  );
};

export default App;
