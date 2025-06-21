export default function FooterSection() {
  return (
    <footer className="w-full bg-peach-50 py-8 text-center">
      <p className="text-peach-600 text-sm">
        © {new Date().getFullYear()} Jinita Patel. All Rights Reserved.
      </p>
      {/* <p className="text-peach-500 text-xs mt-2">Built with Next.js and Tailwind CSS</p> */}
    </footer>
  );
}
