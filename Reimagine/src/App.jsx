// import { useState } from 'react';
import { TabsDemo } from './ui/UseTab';
import { WavyBackgroundDemo } from './component/wavyback';
import { InfiniteMovingCardsDemo } from './component/infinitMovingCardComp'
// import { FloatingNavDemo } from './component/FloatinNavComp'
import { AnimatedPinDemo } from './component/3dPenComp'
// import { HeroHighlightDemo } from './component/Hero-heightlightComp'
import { WobbleCardDemo } from './component/WorbbleCardComp'
import { StickyScrollMain1 } from './component/StickyScrollComp1'
import { StickyScrollMain2 } from './component/StickyScrollComp2'
import { StickyScrollMain3 } from './component/StickyScrollComp3'
// import { ThreeDCardDemo } from './component/3dCard'
import Company from './component/Company';
import { NavbarDemo } from './component/FixedNavComp'
import { GridBackgroundDemo } from './component/Background1'
import { DotBackgroundDemo } from './component/Background2'
import { GridSmallBackgroundDemo } from './component/Background3'
import { CanvasRevealEffectDemo } from './component/CardScrollComp'
import { LampDemo } from './component/Lamp'
function App() {
  
  return (
    <div className="bg-[#111] flex flex-col overflow-hidden">
      {/* <ThreeDCardDemo/> */}
      {/* <HeroHighlightDemo/> */}
      {/* <ThreeDCardDemo/> */}
      {/* <WobbleCardDemo/> */}
      {/* <FloatingNavDemo/> */}
      {/* <WobbleCardDemo/> */}

      {/* Header  */}
      <NavbarDemo/>
      <WavyBackgroundDemo />
      <TabsDemo />
      <InfiniteMovingCardsDemo/>
      {/* mid1 */}
      <GridBackgroundDemo/>
      <StickyScrollMain1/>
      {/* mid2 */}
      <DotBackgroundDemo/>
      <StickyScrollMain2/>
      {/* mid3 */}
      <GridSmallBackgroundDemo/>
      <StickyScrollMain3/>
      {/* Footer */}
      <AnimatedPinDemo/>
      <Company />

      <CanvasRevealEffectDemo/>
      <LampDemo/>
    </div>
  );
}

export default App;
