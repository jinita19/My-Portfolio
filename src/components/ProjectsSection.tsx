'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  slug: string;
  image?: string;
  title: string;
  description: string;
  brief?: string;
  techs?: string[];
  work?: string[];
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
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
    <section id="projects" className="w-screen relative py-14 md:py-18 bg-peach-75">
      <div className="w-full px-10 md:px-40">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-peach-900 md:py-5 mb-8 text-center">
          Projects
        </h2>
        <div className="relative">
          <div
            className={
              showCarousel
                ? 'flex gap-8 overflow-hidden'
                : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            }
          >
            {visibleProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                style={
                  showCarousel
                    ? {
                        width: 'calc((100% - 64px) / 3)',
                      }
                    : {}
                }
                className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex-shrink-0"
              >
                {project.image && (
                  <div className="aspect-[4/3] w-full max-w-[320px] mb-4 mx-auto relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2 text-peach-800">{project.title}</h3>
                <p className="text-peach-700 mb-4">{project.description}</p>
                <span className="text-peach-500 font-medium">View Details →</span>
              </Link>
            ))}
          </div>

          {showCarousel && (
            <>
              <button
                onClick={handlePrev}
                disabled={carouselIndex === 0}
                className={`absolute -left-14 top-1/2 -translate-y-1/2 border border-peach-700 hover:bg-peach-700 hover:text-peach-50 text-peach-800 rounded-full p-3 shadow-md z-20 transition-all duration-200 ${carouselIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                aria-label="Previous"
                style={{ backdropFilter: 'blur(2px)' }}
              >
                &#8592;
              </button>
              <button
                onClick={handleNext}
                disabled={carouselIndex >= projects.length - 3}
                className={`absolute -right-14 top-1/2 -translate-y-1/2 border border-peach-700 rounded-full p-3 shadow-md z-20 transition-all duration-200
                  ${carouselIndex >= projects.length - 3 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                aria-label="Next"
                style={{ backdropFilter: 'blur(2px)' }}
              >
                &#8594;
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
