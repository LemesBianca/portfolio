import InfoCard from "@/components/InfoCard";
import ProjectGallery from "@/components/ProjectGallery";

export default function PawRescuePage() {

  const features = [
    "Player movement",
    "Checkpoint system",
    "Health system",
    "Collectibles",
    "Level progression",
    "UI & HUD",
    "Audio system"
  ];

  const Challenges = [
    "Designing responsive player movement.",
    "Balancing jump physics.",
    "Creating reusable gameplay systems.",
    "Learning Godot scene architecture."
  ];


  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto border border-zinc-800 rounded-[40px] p-8 md:p-12">

        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-[40px] p-8 max-w-4xl w-full flex justify-center">
            <img
              src="/paw-rescue/pr99.png"
              alt="Paw Rescue"
              className="h-60 object-contain"
            />
          </div>
        </div>

        <p className="text-center text-2xl text-zinc-200 max-w-5xl mx-auto leading-relaxed mb-15">
          This project was developed as an indie game using Godot. The goal was to create a 
          complete platformer experience while learning gameplay programming, player movement, 
          level design and game architecture.
        </p>

        <p className="text-zinc-500 mb-0">
          .../Technologies ...
        </p>

        <div className="flex flex-wrap md:gap-7 justify-center mb-20">

          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Godot
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            GDScript
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Aseprite
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Photoshop
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Git
          </button>

        </div>

        <div className="flex justify-end mb-24">
          <div className="max-w-2xl text-right">

            <h2 className="text-6xl font-light mb-5">
              My Contributions
            </h2>

            <p className="text-zinc-300 leading-relaxed ">
              Collaborated in the development focusing on game design and content creation. 
              Contributed to level design, asset creation and selection, animations, 
              sound implementation, and gameplay polishing, working alongside the programmer 
              to transform gameplay ideas into a complete player experience.
            </p>

          </div>
        </div>

        <div className="relative border border-zinc-700 rounded-[40px] p-8 mb-20">
          <h2
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black px-6 text-4xl"
          >
            Gameplay Features
          </h2>

          <div className="grid md:grid-cols-7 gap-6 mt-8">
            {features.map((feature) => (
              <InfoCard key={feature}>
                {feature}
              </InfoCard>
            ))}
          </div>
        </div>

        <ProjectGallery
          images={[
            "/paw-rescue/pr01.jpg",
            "/paw-rescue/pr02.jpg",
            "/paw-rescue/pr03.jpg",
            "/paw-rescue/pr04.jpg",
            "/paw-rescue/pr05.jpg",
            "/paw-rescue/pr06.jpg",
            "/paw-rescue/pr07.jpg",
            "/paw-rescue/pr08.jpg",
            "/paw-rescue/pr09.jpg",
            "/paw-rescue/pr10.jpg",
            "/paw-rescue/pr100.jpeg",
          ]}
        />

        <div className="relative border border-zinc-700 rounded-[40px] p-8 mb-20 mt-20">
          <h2
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black px-6 text-4xl"
          >
            Challenges
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {Challenges.map((Challenge) => (
              <InfoCard key={Challenge}>
                {Challenge}
              </InfoCard>
            ))}
          </div>
        </div>

        <h2 className="text-6xl mb-8">
          What I Learned
        </h2>

        <p className="max-w-2xl text-zinc-300 leading-relaxed">
          Continuous learning and persistence have been the most
          impactful aspects of this journey. Developing software
          requires constant problem solving, adaptability and the
          ability to understand user needs. In addition, the social
          purpose of the project provides extra motivation to
          continuously improve the solution and contribute to animal welfare.
        </p>

        <div className="flex justify-end mt-10">

          <div className="max-w-3xl">

            <h2 className="text-7xl font-light mb-8 text-right">
              Play the Game
            </h2>

            <a 
          href="https://lemesbianca.itch.io/paw-rescue"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-3 border border-zinc-800 rounded-full text-zinc-300
                      hover:bg-white hover:text-black transition-all duration-300
                      items-center justify-center flex"
        >
          
          Download on Itch.io
        </a>

          </div>

        </div>

      </div>
    </main>
  );
}