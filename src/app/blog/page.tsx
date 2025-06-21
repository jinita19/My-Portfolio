import { getBlogs } from '@/data/blogs';
import { formatDate } from '@/helpers';

export default async function BlogsPage() {
  const blogs = await getBlogs();
  console.log('Blogs:', blogs);
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-peach-900 mb-10 text-center">All Blog Posts</h1>
      <div className="flex flex-col gap-6">
        {blogs.map((blog) => (
          <a
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="flex flex-row items-center justify-between bg-white rounded-xl shadow p-6 hover:shadow-lg transition border border-peach-100 focus:outline-none focus:ring-2 focus:ring-peach-400 cursor-pointer group"
            tabIndex={0}
            aria-label={`Read blog post: ${blog.title}`}
            role="link"
          >
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-peach-800 mb-1 group-hover:underline">
                {blog.title}
              </span>
              <span className="text-peach-500 text-sm">{blog.readTime}</span>
            </div>
            <span className="text-peach-700 text-sm font-medium ml-4 min-w-[110px] text-right">
              {formatDate(blog.date)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
