import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

interface ProjectDetailPageProps {
 params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({params} : ProjectDetailPageProps ) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const { title, description, brief, techs, work } = project;

  return (
    <main className="flex flex-col items-center justify-center py-20 px-4 bg-peach-50">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-peach-900 mb-4 w-full text-left">
          {title}
        </h1>
        <p className="text-peach-700 text-lg mb-6 w-full text-left">{description}</p>
        <p className="text-peach-800 mb-8 w-full text-left">{brief}</p>
        <div className="mb-8 w-full flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-peach-800 mb-2 w-full text-left">
            Tech Stack
          </h2>
          <ul className="flex flex-wrap gap-3 mb-4 w-full">
            {techs.map((tech) => (
              <li
                key={tech}
                className="bg-peach-100 text-peach-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-peach-800 mb-2 w-full text-left">
            What I Did
          </h2>
          <ul className="list-disc list-inside text-peach-700 text-left w-full mx-auto pl-4">
            {work.map((item, idx) => (
              <li key={idx} className="my-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
