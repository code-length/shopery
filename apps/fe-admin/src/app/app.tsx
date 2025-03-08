import '@fontsource/poppins';
import '@shopery/ui-shared/styles';
import { Sidebar } from '../components';
import { PageLayout } from '../layouts';
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
