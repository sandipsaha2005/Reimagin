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
import { NavbarDemo } from './component/FixedNavComp'
import { GridBackgroundDemo } from './component/Background1'
import { DotBackgroundDemo } from './component/Background2'
import { GridSmallBackgroundDemo } from './component/Background3'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#111] flex flex-col overflow-hidden">
      <NavbarDemo/>
      <WavyBackgroundDemo />
      {/* <FloatingNavDemo/> */}
      <TabsDemo />
      <InfiniteMovingCardsDemo/>
      <HeroHighlightDemo/>
      <StickyScrollRevealDemo/>
      <AnimatedPinDemo/>
      <WobbleCardDemo/>
      {/* <ThreeDCardDemo/> */}
      <GridBackgroundDemo/>
      <DotBackgroundDemo/>
      <GridSmallBackgroundDemo/>
    </div>
  );
}

export default App;
