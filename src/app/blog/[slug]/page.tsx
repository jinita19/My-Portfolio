import { getBlogs } from '@/data/blogs';
import { notFound } from 'next/navigation';
import { formatDate } from '@/helpers';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const blogs = await getBlogs();
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

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
        "
      >
        {compiled.content}
      </div>
    </article>
  );
}
