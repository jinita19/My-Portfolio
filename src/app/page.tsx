'use client';

import Image from 'next/image';
import Link from 'next/link';
import TechMarquee from '@/components/TechMarquee';
import { projects } from '@/data/projects';
import { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

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
    <div className="flex flex-col lg:flex-col items-center w-full px-6">
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full bg-peach-50 py-15 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 px-14 py-6">
          <div className="max-w-xl w-full">
            <h1 className="text-6xl font-bold text-peach-900 mb-2">Hi, I’m Jinita Patel</h1>
            <h2 className="text-2xl text-peach-500 font-semibold mb-8">Full Stack Developer</h2>
            <p className="text-peach-700 text-xl mb-10">
              5+ years building scalable web apps with React, Node, and Java. I write clean code,
              scale systems, and mentor junior devs. I’m passionate about creating user-friendly
              experiences and solving complex problems with elegant solutions.
            </p>
            <div className="flex gap-10">
              <Link
                href="/blog"
                className="px-5 py-2 border border-peach-600 bg-peach-400 text-white rounded-md shadow-md hover:bg-peach-50 hover:text-peach-900"
              >
                Read My Blog
              </Link>
              <Link
                href="#projects"
                className="px-5 py-2 border border-peach-600 text-peach-600 rounded-md shadow-md hover:bg-peach-400 hover:text-white"
              >
                View Experience
              </Link>
            </div>
          </div>
          <div className="w-100 h-100 relative rounded-full overflow-hidden border-4 border-peach-200 shadow-md">
            <Image
              src="/profile-pic.png"
              alt="Jinita Patel"
              className="object-cover w-full h-full"
              fill
            />
          </div>
        </div>
        <div className="w-full mb-25" />
        <TechMarquee />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-screen relative py-18 bg-peach-75">
        <div className="w-full px-31">
          <h1 className="text-6xl font-bold mb-8 text-peach-900">Projects</h1>
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

      {/* Contact Section */}
      <section id="contact" className="w-screen relative py-18 bg-peach-75 flex items-center justify-center min-h-[600px]">
        <div className="w-full max-w-3xl mx-auto px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold mb-4 text-peach-900">Contact</h1>
          <p className="text-xl text-peach-700 mb-10 font-semibold">Let&apos;s build something amazing together! Reach out and let&apos;s connect.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
            <a href="mailto:jinita.patel1901@gmail.com" target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-peach-100/40 transition-all w-full md:w-1/3">
              <span className="rounded-full bg-peach-200 group-hover:bg-peach-400 p-4 text-peach-800 text-4xl shadow-lg transition-all"><FaEnvelope /></span>
              <span className="text-lg font-bold text-peach-800 mt-2">Email</span>
              <span className="text-peach-600 text-md">jinita.patel1901@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/jinita-shah19/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-peach-100/40 transition-all w-full md:w-1/3">
              <span className="rounded-full bg-peach-200 group-hover:bg-peach-400 p-4 text-peach-800 text-4xl shadow-lg transition-all"><FaLinkedin /></span>
              <span className="text-lg font-bold text-peach-800 mt-2">LinkedIn</span>
              <span className="text-peach-600 text-md">/jinita-shah19</span>
            </a>
            <a href="https://github.com/jinita19" target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-peach-100/40 transition-all w-full md:w-1/3">
              <span className="rounded-full bg-peach-200 group-hover:bg-peach-400 p-4 text-peach-800 text-4xl shadow-lg transition-all"><FaGithub /></span>
              <span className="text-lg font-bold text-peach-800 mt-2">GitHub</span>
              <span className="text-peach-600 text-md">@jinita19</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-peach-50 pt-10 pb-3 text-center">
        <p className="text-peach-600 text-sm">
          © {new Date().getFullYear()} Jinita Patel. All rights reserved.
        </p>
        <p className="text-peach-500 text-xs mt-2">Built with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  );
}
