import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/helpers';

type Blog = {
	slug: string;
	image: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	author: string;
};

type BlogSectionProps = {
	blogs: Blog[];
};

export default async function BlogSection({ blogs }: BlogSectionProps) {
	const showAll = blogs.length > 3;
	const visibleBlogs = showAll ? blogs.slice(0, 3) : blogs;

	return (
		<section id="blog" className="w-full py-18 px-4 md:px-0">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl md:text-5xl font-heading font-bold text-peach-900 text-center py-5 mb-8">
					Latest Blog Posts
				</h2>
				<div className={`${visibleBlogs.length < 3 ? 'flex flex-col w-1/3 mx-auto' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
					{visibleBlogs.map((blog) => (
						<Link
							key={blog.slug}
							href={`/blog/${blog.slug}`}
							className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-200 p-0 flex flex-col overflow-hidden hover:-translate-y-2 border border-transparent hover:border-peach-400"
						>
							<div className="relative w-full h-48">
								<Image
									src={blog.image}
									alt={blog.title}
									fill
									className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
								/>
							</div>
							<div className="p-6 flex flex-col flex-1">
								<h3 className="text-2xl font-heading font-bold text-peach-800 mb-2 group-hover:text-peach-600 transition">
									{blog.title}
								</h3>
								<p className="text-peach-700 text-base mb-4 flex-1">
									{blog.excerpt}
								</p>
								<div className="flex items-center justify-between text-peach-500 text-sm mt-auto">
									<span>{formatDate(blog.date)}</span>
									<span>{blog.readTime}</span>
								</div>
								<div className="mt-2 text-peach-400 text-xs font-medium">
									By {blog.author}
								</div>
							</div>
						</Link>
					))}
				</div>
				{showAll && (
					<div className="flex justify-center mt-10">
						<Link
							href="/blog"
							className="px-5 py-2 bg-peach-400 text-white rounded-full font-medium shadow hover:bg-peach-600 transition"
						>
							View All
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}