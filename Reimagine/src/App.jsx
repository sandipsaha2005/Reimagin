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

function App() {

  return (
    <div className="bg-[#111] flex flex-col overflow-hidden">
      <NavbarDemo/>
      <WavyBackgroundDemo />
      {/* <FloatingNavDemo/> */}
      <TabsDemo />
      <InfiniteMovingCardsDemo/>
      {/* <HeroHighlightDemo/> */}
      {/* ................. */}
      <GridBackgroundDemo/>
      <StickyScrollMain1/>
      {/* ............... */}
      <DotBackgroundDemo/>
      <StickyScrollMain2/>
      {/* ..................... */}
      <GridSmallBackgroundDemo/>
      <StickyScrollMain3/>
      {/* ......................... */}
      <AnimatedPinDemo/>
      <Company />

      <WobbleCardDemo/>
      {/* <ThreeDCardDemo/> */}
    </div>
  );
}

export default App;
