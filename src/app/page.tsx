import Image from "next/image";
import Link from "next/link";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-col items-center w-full px-6">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 py-16 px-14">
        <div className="max-w-xl w-full">
          <h1 className="text-6xl font-bold text-peach-900 mb-2">Hi, I’m Jinita Patel</h1>
          <h2 className="text-2xl text-peach-500 font-semibold mb-8">Full Stack Developer</h2>
          <p className="text-peach-700 text-xl mb-10">
            5+ years building scalable web apps with React, Node, and Java. I write clean code,
            scale systems, and mentor junior devs. I’m passionate about creating
            user-friendly experiences and solving complex problems with elegant solutions.
          </p>
          <div className="flex gap-10">
            <Link href="/blog" className="px-5 py-2 border border-peach-600 bg-peach-400 text-white rounded-md shadow-md hover:bg-peach-50 hover:text-peach-600">Read My Blog</Link>
            <Link href="/experience" className="px-5 py-2 border border-peach-600 text-peach-600 rounded-md hover:bg-peach-400 hover:text-white">View Experience</Link>
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
      <div className="w-full mb-10" />
      <TechMarquee />
    </div>
  );
}
