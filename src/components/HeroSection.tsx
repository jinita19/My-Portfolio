import Image from 'next/image';
import HeroLinks from './HeroLinks';
import TechMarquee from './TechMarquee';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full bg-peach-50 flex flex-col items-center justify-center pt-8 pb-10"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 py-6">
        <div className="max-w-xl w-full">
          <h1 className="text-6xl font-bold text-peach-900 mb-2">Hi, I’m Jinita Patel</h1>
          <h2 className="text-2xl text-peach-500 font-semibold mb-8">Full Stack Developer</h2>
          <p className="text-peach-700 text-xl mb-10 ">
            I’m a software developer with 6 years of experience building user-friendly and scalable
            applications using React, Java, and Node.js. I’ve been recognized for creating features
            that truly improve the user experience. I enjoy working on projects that make a real
            difference in people’s lives.
          </p>
          <HeroLinks />
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
      <div className="w-full mb-25" />
      <TechMarquee />
    </section>
  );
}
