export default function Experience() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-5xl font-bold mb-12 text-right">
        Experiência Profissional
      </h2>

      <div className="space-y-8">

        <div className="grid md:grid-cols-3 gap-4 border-b border-zinc-800 pb-6">
          <div className="text-zinc-500">
            2026 - Atual
          </div>

          <div>
            <h3 className="font-semibold">
              Full Stack Developer Resident
            </h3>

            <p className="text-zinc-400">
              BRISA / TIC 55
            </p>
          </div>

          <div className="text-zinc-400">
            Desenvolvimento de funcionalidades,
            integração com banco de dados,
            correção de bugs e manutenção
            do Sistema GAPA.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 border-b border-zinc-800 pb-6">
          <div className="text-zinc-500">
            2022 - 2025
          </div>

          <div>
            <h3 className="font-semibold">
              Técnica em Química
            </h3>

            <p className="text-zinc-400">
              Laboratório de Pesquisa e Desenvolvimento
            </p>
          </div>

          <div className="text-zinc-400">
            Atuação em pesquisa, desenvolvimento,
            testes e documentação de projetos.
          </div>
        </div>

      </div>
    </section>
  );
}