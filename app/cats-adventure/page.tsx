export default function CatsAdventurePage() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-20">

      <p className="text-zinc-500 mb-4">
        In Development
      </p>

      <h1 className="text-6xl font-bold mb-8">
        Cat's Adventure
      </h1>

      <img
        src="/cats-adventure.png"
        alt="Cat's Adventure"
        className="rounded-3xl w-full mb-12"
      />

      <p className="text-zinc-400 text-lg max-w-3xl">
        A 2D top-down adventure game where players 
        control a cat on a mission to rescue friends 
        kidnapped by a mysterious villain.
      </p>

    </main>
  );
}