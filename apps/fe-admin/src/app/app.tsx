
import '@fontsource/poppins';
import '@shopery/ui-shared/styles';
        
const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <PageLayout />
    </div>
  );
};

export default App;
