import { ColorBox, SelectColors } from './components';
import { ColorProvider } from './contexts/Color';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
