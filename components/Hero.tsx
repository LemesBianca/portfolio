export default function Hero() {
  return (
    <section className="py-12">
      <p className="text-zinc-400 mb-8">
        Bianca Lemes
      </p>

      <h1 className="text-7xl md:text-9xl font-bold leading-none">
        Full-Stack
      </h1>

      <div className="mt-2">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <h1 className="text-7xl md:text-9xl font-bold leading-none order-1 md:order-2">
            Developer
          </h1>

          <p className="hidden md:block max-w-sm text-zinc-400 text-sm md:text-base order-2 md:order-1">
            Software Development student with hands-on experience
            building web applications using Next.js, React,
            TypeScript, Prisma and PostgreSQL.
          </p>
        </div>

        <p className="md:hidden mt-6 text-zinc-400">
          Software Development student with hands-on experience
          building web applications using Next.js, React,
          TypeScript, Prisma and PostgreSQL.
        </p>

      </div>
    </section>
  );
}