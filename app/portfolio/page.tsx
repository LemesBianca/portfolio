export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8">

      <p className="text-zinc-500 mb-4">
        Personal Project
      </p>

      <h1 className="text-6xl font-bold mb-8">
        Portfolio Website
      </h1>

      <img
        src="/portfolio.png"
        alt="Portfolio"
        className="rounded-3xl w-full mb-12"
      />

      <p className="text-zinc-400 text-lg max-w-3xl">
        Personal portfolio website developed to showcase
        professional experience, projects and technical
        skills through a modern and responsive interface.
      </p>

    </main>
  );
}