const icons = [
  '/icons/html.png',
  '/icons/css.png',
  '/icons/javascript.png',
  '/icons/tailwind.png',
  '/icons/git.png',
  '/icons/react.png',
  '/icons/java.png',
  '/icons/next.png',
  '/icons/typescript.png',
  '/icons/sql.png',
  '/icons/nodejs.png',
];

export default function TechMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-peach-50 w-80 md:w-190 px-20">
      <div className="flex animate-marquee gap-10">
        {icons.concat(icons).map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Tech Icon"
            className="w-12 h-12 object-contain inline-block rounded-sm"
            style={{ flex: '0 0 auto' }}
          />
        ))}
      </div>
    </div>
  );
}
