import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhatIs from '@/components/WhatIs';
import WhyItWorks from '@/components/WhyItWorks';
import ForYou from '@/components/ForYou';
import BeltSystem from '@/components/BeltSystem';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhatIs />
      <WhyItWorks />
      <ForYou />
      <BeltSystem />
      <Testimonials />
      <CTA />
    </>
  );
}
