import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export default async function AboutPage() {
  const aboutPath = path.join(process.cwd(), 'src/app/about/about-me.md');
  const source = fs.readFileSync(aboutPath, 'utf8');
  const compiled = await compileMDX({ source });

  return (
    <main
      className="
        max-w-3xl mx-auto py-16 px-4 text-peach-900
        [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mb-6
        [&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-4
        [&>p]:text-lg [&>p]:mb-4
        [&>ul]:list-disc [&>ul]:list-inside [&>ol]:list-decimal [&>ol]:list-inside
        [&>li]:ml-4 [&>li]:mt-2
    "
    >
      {compiled.content}
    </main>
  );
}
