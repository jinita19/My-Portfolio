import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import BlogSection from '@/components/BlogSection';
import { getBlogs } from '@/data/blogs';
import { projects } from '@/data/projects';

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col lg:flex-col items-center w-full">
      <HeroSection />
      <ProjectsSection projects={projects} />
      <BlogSection blogs={blogs} />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
