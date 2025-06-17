import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-screen relative py-18 bg-peach-75 flex items-center justify-center min-h-[600px]"
    >
      <div className="w-full max-w-3xl mx-auto px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold mb-5 text-peach-900">Contact</h1>
        <p className="text-xl text-peach-700 mb-10 font-semibold">
          Ready to compile some magic? Let&apos;s connect and debug the path to success.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <a
            href="mailto:jinita.patel1901@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-peach-100/40 transition-all w-full md:w-1/3"
          >
            <span className="rounded-full bg-peach-200 group-hover:bg-peach-400 p-4 text-peach-800 text-4xl shadow-lg transition-all">
              <FaEnvelope />
            </span>
            <span className="text-lg font-bold text-peach-800 mt-2">Email</span>
            <span className="text-peach-600 text-md">jinita.patel1901@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jinita-shah19/"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-peach-100/40 transition-all w-full md:w-1/3"
          >
            <span className="rounded-full bg-peach-200 group-hover:bg-peach-400 p-4 text-peach-800 text-4xl shadow-lg transition-all">
              <FaLinkedin />
            </span>
            <span className="text-lg font-bold text-peach-800 mt-2">LinkedIn</span>
            <span className="text-peach-600 text-md">/jinita-shah19</span>
          </a>
          <a
            href="https://github.com/jinita19"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-peach-100/40 transition-all w-full md:w-1/3"
          >
            <span className="rounded-full bg-peach-200 group-hover:bg-peach-400 p-4 text-peach-800 text-4xl shadow-lg transition-all">
              <FaGithub />
            </span>
            <span className="text-lg font-bold text-peach-800 mt-2">GitHub</span>
            <span className="text-peach-600 text-md">@jinita19</span>
          </a>
        </div>
      </div>
    </section>
  );
}
