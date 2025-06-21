'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav
      className={
        'navbar flex items-center justify-between py-4 bg-peach-50 shadow-sm fixed w-full px-40 z-10 font-navbar'
      }
    >
      <h1 className="text-xl font-bold text-peach-900 font-heading heading-bold">Jinita Patel</h1>
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-sm text-peach-500 font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#blog">Blog</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open menu"
      >
        <span className="block w-6 h-0.5 bg-peach-900 mb-1"></span>
        <span className="block w-6 h-0.5 bg-peach-900 mb-1"></span>
        <span className="block w-6 h-0.5 bg-peach-900"></span>
      </button>
      {/* Drawer Menu */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          />
          <div className="relative bg-peach-50 w-64 h-full shadow-lg p-8 flex flex-col gap-6 animate-slideInRight right-0 fixed top-0">
            <button
              className="absolute top-8 right-4 text-peach-900 text-2xl font-bold focus:outline-none"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <Link
              href="/"
              onClick={() => setDrawerOpen(false)}
              className="text-peach-900 font-heading text-xl font-bold"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setDrawerOpen(false)}
              className="text-peach-900 font-heading text-xl font-bold"
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={() => setDrawerOpen(false)}
              className="text-peach-900 font-heading text-xl font-bold"
            >
              Projects
            </Link>
            <Link
              href="#blog"
              onClick={() => setDrawerOpen(false)}
              className="text-peach-900 font-heading text-xl font-bold"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              onClick={() => setDrawerOpen(false)}
              className="text-peach-900 font-heading text-xl font-bold"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
