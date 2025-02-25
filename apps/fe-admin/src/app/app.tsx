import { useState } from 'react';
import PageLayout from '../layouts/PageLayout';
import * as Components from '../components/index';
import styles from './app.module.scss';

const App = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleOpenCloseSidebar = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={styles.Parent}>
      <Components.Sidebar active={active} />
      <div>
        <Components.Header onClick={handleOpenCloseSidebar} />
        <PageLayout />
      </div>
    </div>
  );
};

export default App;
