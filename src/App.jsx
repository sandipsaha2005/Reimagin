import React from 'react';
// import { useState } from 'react';
import { TabsDemo } from './ui/UseTab';
import { WavyBackgroundDemo } from './component/wavyback';
import { InfiniteMovingCardsDemo } from './component/infinitMovingCardComp'
// import { FloatingNavDemo } from './component/FloatinNavComp'
import { AnimatedPinDemo } from './component/3dPenComp'
// import { HeroHighlightDemo } from './component/Hero-heightlightComp'
// import { WobbleCardDemo } from './component/WorbbleCardComp'
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
import { LinkPreviewDemo } from './component/linkTextComponet'
// import { HoverBorderGradientDemo } from './component/HoverBorderGradComp'
import  MultiStepLoaderDemo  from './component/multiStepLoaderComp'
import Footer from './component/Footer';
import { BackgroundBeamsDemo } from './component/backgroundBeamsComp'
function App() {
  
  return (
    <div className="bg-[#111] flex flex-col overflow-hidden">
      {/* <ThreeDCardDemo/> */}
      {/* <HeroHighlightDemo/> */}
      {/* <ThreeDCardDemo/> */}
      {/* <WobbleCardDemo/> */}
      {/* <FloatingNavDemo/> */}
      {/* <WobbleCardDemo/> */}
      {/* <HoverBorderGradientDemo/> */}
      {/* <BackgroundBeamsDemo/> */}

      {/* Header  */}
      <NavbarDemo/>
      <WavyBackgroundDemo />
      <TabsDemo />
      <MultiStepLoaderDemo/>
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
      <LinkPreviewDemo/>
      {/* <Company /> */}

      <CanvasRevealEffectDemo/>
      <LampDemo/>
      <Footer/>

    </div>
  );
}

export default App;
