import { Button } from '@shopery/libs';

function App() {
  return (
    <div>
      <h1>React Project</h1>
      <Button
        label="small"
        onClick={() => alert('Clicked!')}
        fill="fill"
        size="small"
      />
      <Button
        label="medium"
        onClick={() => alert('Clicked!')}
        fill="border"
        size="medium"
      />
      <Button
        label="large"
        onClick={() => alert('Clicked!')}
        fill="ghost"
        size="large"
      />
    </div>
  );
}

export default App;
