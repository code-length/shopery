// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import { Button } from '@shopery/ui-shared';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div>
      <Button onClick={() => console.log('test')} variant='border' size='large'>
        Test
      </Button>
      <div role='navigation'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/page-2'>Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              This is the generated root route.{' '}
              <Link to='/page-2'>Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path='/page-2'
          element={
            <div>
              <Link to='/'>Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
