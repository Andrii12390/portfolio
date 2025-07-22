'use client';

import { Header, Footer } from '@/components/layout';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from '@/components/sections';

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
