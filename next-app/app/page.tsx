import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { LogoBar } from '@/components/logo-bar';
import { FailureFlow } from '@/components/failure-flow';
import { WhatWeShip } from '@/components/what-we-ship';
import { Timeline } from '@/components/timeline';
import { CaseStudy } from '@/components/case-study';
import { Comparison } from '@/components/comparison';
import { Why } from '@/components/why';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';
import { ScrollReveal } from '@/components/scroll-reveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <LogoBar />
      <FailureFlow />
      <WhatWeShip />
      <Timeline />
      <CaseStudy />
      <Comparison />
      <Why />
      <FinalCTA />
      <Footer />
    </>
  );
}
