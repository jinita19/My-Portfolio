import Link from 'next/link';

export default function HeroLinks() {
  return (
    <div className="flex gap-10">
      <Link
        href="/blog"
        className="px-5 py-2 border border-peach-600 bg-peach-400 text-white rounded-md shadow-md hover:bg-peach-50 hover:text-peach-900"
      >
        Read My Blog
      </Link>
      {/* <Link
        href="#projects"
        className="px-5 py-2 border border-peach-600 text-peach-600 rounded-md shadow-md hover:bg-peach-400 hover:text-white"
      >
        View Experience
      </Link> */}
      <Link
        href="/Jinita%20Patel%20-%20Software%20Engineer.pdf"
        download
        className="px-5 py-2 border border-peach-600 text-peach-600 rounded-md shadow-md hover:bg-peach-400 hover:text-white"
      >
        Download Resume
      </Link>
    </div>
  );
}
