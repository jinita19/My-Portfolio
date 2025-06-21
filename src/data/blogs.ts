import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function calculateReadTime(text: string) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} min read`;
}

export async function getBlogs() {
  const blogDir = path.join(process.cwd(), 'src/blog-posts');
  const files = await Promise.resolve(fs.readdirSync(blogDir));
  const blogs = files.map((file) => {
    const filePath = path.join(blogDir, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);
    return {
      title: data.title || '',
      date: data.date || '',
      slug: data.slug || file.replace(/\.md$/, ''),
      image: data.image || '',
      readTime: calculateReadTime(content),
      excerpt: data.excerpt || content.slice(0, 120) + '...',
      author: data.author || '',
      content: content || '',
    };
  });
  blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return blogs;
}
