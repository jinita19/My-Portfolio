import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Jinita | Developer Portfolio',
  description: 'Portfolio of a Full-Stack Developer sharing projects, blogs, and experience',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-peach-50 text-peach-900 font-sans">
        <nav className="flex items-center justify-between px-6 py-4 bg-peach-50 shadow-sm">
          <h1 className="text-xl font-bold text-peach-900">Jinita Patel</h1>
          <ul className="flex space-x-6 text-sm text-peach-500 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
