export default function Projects() {
  return (
    <section className="py-24 px-8">
      <h2 className="text-4xl font-bold mb-12">
        Projetos
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-zinc-800 rounded-2xl p-6">
          <span className="text-sm text-blue-400">
            Projeto Profissional
          </span>

          <h3 className="text-2xl font-semibold mt-2">
            Sistema GAPA
          </h3>

          <p className="text-zinc-400 mt-3">
            Sistema de gestão para proteção animal,
            desenvolvido com Next.js, TypeScript,
            Prisma e PostgreSQL.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              React
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Next.js
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              TypeScript
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Prisma
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              PostgreSQL
            </span>
          </div>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-6">
          <span className="text-sm text-blue-400">
            Em desenvolvimento
          </span>

          <h3 className="text-2xl font-semibold mt-2">
            Cat's Adventure
          </h3>

          <p className="text-zinc-400 mt-3">
            O jogo é um topdown 2D onde os jogadores controlam um gato aventureiro
            em uma jornada para resgatar seus amigos sequestrados por um vilão misterioso.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Unity
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              C#
            </span>
            
            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Unity API
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Game Design
            </span>
          </div>
        </div>


      </div>
    </section>
  );
}
