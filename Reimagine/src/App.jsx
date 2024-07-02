import { useState } from 'react';
import { TabsDemo } from './ui/UseTab';
import { WavyBackgroundDemo } from './component/wavyback';
import { InfiniteMovingCardsDemo } from './component/infinitMovingCardComp'
import { FloatingNavDemo } from './component/FloatinNavComp'
import { AnimatedPinDemo } from './component/3dPenComp'
import { HeroHighlightDemo } from './component/Hero-heightlightComp'
import { WobbleCardDemo } from './component/WorbbleCardComp'
import { StickyScrollRevealDemo } from './component/StickyScrollComp'
import { ThreeDCardDemo } from './component/3dCard'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#111] flex flex-col overflow-hidden">
      <WavyBackgroundDemo />
      <FloatingNavDemo/>
      <TabsDemo />
      <InfiniteMovingCardsDemo/>
      <AnimatedPinDemo/>
      <HeroHighlightDemo/>
      <StickyScrollRevealDemo/>
      <WobbleCardDemo/>
      {/* <ThreeDCardDemo/> */}
    </div>
  );
}

export default App;
