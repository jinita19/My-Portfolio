'use client';

import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import { projects } from '@/data/projects';
import { useState } from 'react';

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const showCarousel = projects.length > 3;
  const visibleProjects = showCarousel
    ? projects.slice(carouselIndex, carouselIndex + 3)
    : projects;

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(prev + 1, projects.length - 3));
  };

  return (
    <div className="flex flex-col lg:flex-col items-center w-full">
      <HeroSection />
      <ProjectsSection
        showCarousel={showCarousel}
        visibleProjects={visibleProjects}
        handlePrev={handlePrev}
        handleNext={handleNext}
        carouselIndex={carouselIndex}
      />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
