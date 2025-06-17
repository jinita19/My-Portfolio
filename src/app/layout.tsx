import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Jinita | Developer Portfolio',
  description: 'Portfolio of a Full-Stack Developer sharing projects, blogs, and experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,400&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-peach-50 text-peach-900 font-body">
        <Navbar />
        <main className="px-40 pt-20">{children}</main>
      </body>
    </html>
  );
}
