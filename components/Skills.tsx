export default function Skills() {
  return (
    <section className="py-24 px-8">
      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mt-2">
            Front-end
          </h3>

          <p className="text-zinc-400 mt-3">
            React / Next.js / TypeScript / Tailwind
          </p>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mt-2">
            Back-end
          </h3>

          <p className="text-zinc-400 mt-3">
            Prisma / PostgreSQL / Supabase
          </p>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mt-2">
            Ferramentas
          </h3>

          <p className="text-zinc-400 mt-3">
            Git / GitHub / Vercel
          </p>
        </div>
      </div>
    </section>
  );
}
