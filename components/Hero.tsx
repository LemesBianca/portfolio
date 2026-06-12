export default function Hero() {
  return (
    <section className="py-12">
      <p className="text-zinc-400 mb-8">
        Bianca Lemes
      </p>

      <h1 className="text-7xl md:text-9xl font-bold leading-none">
        Full-Stack
      </h1>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-2">
        
        <p className="max-w-sm text-zinc-400 text-sm md:text-base">
          Software Development student with hands-on experience
          building web applications using Next.js, React,
          TypeScript, Prisma and PostgreSQL.
        </p>

        <h1 className="text-7xl md:text-9xl font-bold leading-none">
          Developer
        </h1>
      </div>
    </section>
  );
}