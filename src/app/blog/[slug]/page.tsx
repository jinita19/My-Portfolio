import { getBlogs } from '@/data/blogs';
import { notFound } from 'next/navigation';
import { formatDate } from '@/helpers';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import funFacts from '@/data/funFacts.json';

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const blogs = await getBlogs();
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const funFact = funFacts[(blog.slug as keyof typeof funFacts)];

  const compiled = await compileMDX({
    source: blog.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSanitize],
      },
    },
  });

  return (
    <article className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-heading font-bold text-peach-900 mb-4">{blog.title}</h1>
      <div className="flex items-center gap-4 mb-6 text-peach-500 text-sm">
        <span>{formatDate(blog.date)}</span>
        <span>•</span>
        <span>{blog.readTime}</span>
        <span>•</span>
        <span>By {blog.author}</span>
      </div>
      <div
        className="
          text-base text-lg text-peach-800
          [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-10 [&>h1]:mb-4
          [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-3
          [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-2
          [&>p]:mt-4
          [&>ul]:list-disc [&>ul]:list-inside [&>ol]:list-decimal [&>ol]:list-inside
          [&>li]:ml-4 [&>li]:mt-2
          [&>table]:w-full [&>table]:px-3 [&>table]:my-6 [&>table]:border [&>table]:border-peach-800 [&>table]:border-separate [&>table]:rounded-md [&>table]:overflow-hidden [&>table]:bg-white/40
          [&>thead]:border-b-2 [&>thead]:border-peach-800
          [&>th]:text-peach-900 [&>th]:font-semibold [&>th]:px-6 [&>th]:py-3
          [&>td]:px-6 [&>td]:py-3 [&>td]:border-r [&>td]:border-peach-800 last:[&>td]:border-r-0 [&>td]:text-peach-800
        "
      >
        {compiled.content}
      </div>
      {funFact && (
        <div className="mt-10 p-6 bg-peach-100 rounded-lg shadow-md flex items-start gap-4">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-peach-50 text-peach-700 text-2xl flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-4.556 0-8.25 3.694-8.25 8.25 0 2.7 1.32 5.1 3.6 6.75v2.25a2.25 2.25 0 002.25 2.25h4.8a2.25 2.25 0 002.25-2.25V17.25c2.28-1.65 3.6-4.05 3.6-6.75 0-4.556-3.694-8.25-8.25-8.25zm0 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-6.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V9.75a.75.75 0 01.75-.75z" />
            </svg>
          </span>
          <div>
            <h3 className="text-xl font-semibold text-peach-800 mb-2 flex items-center gap-2">
              Did You Know?
            </h3>
            <p className="text-peach-700">{funFact}</p>
          </div>
        </div>
      )}
    </article>
  );
}
