'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-peach-50 text-peach-900">
      <div className="bg-peach-75 border-2 border-peach-200 rounded-3xl p-10 shadow-lg text-center max-w-md w-full">
        <h1 className="text-6xl font-bold text-peach-600 mb-2">404</h1>
        <h2 className="text-2xl text-peach-800 mb-6 font-semibold">Sorry, this project could not be found.</h2>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-peach-400 text-white rounded-full font-semibold transition-colors hover:bg-peach-600"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}