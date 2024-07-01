import { useState } from 'react';
import { TabsDemo } from './ui/UseTab';
import { WavyBackgroundDemo } from './component/wavyback';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#111] flex flex-col overflow-hidden">
      <WavyBackgroundDemo />
      <TabsDemo />
    </div>
  );
}

export default App;
