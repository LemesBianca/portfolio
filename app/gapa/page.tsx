import InfoCard from "@/components/InfoCard";
import ProjectGallery from "@/components/ProjectGallery";

export default function GapaPage() {

  const features = [
    "Animal registration and management",
    "Inspection management",
    "Sterilization records",
    "Veterinary care tracking",
    "Database integration with Prisma and PostgreSQL",
    "User-friendly web interface"
  ];

  const Challenges = [
    "Transforming requirements and ideas into a functional product",
    " Adapting the system to the real-world needs of animal shelters and veterinary organizations",
    " Ensuring that features remained intuitive and easy to use",
    "Balancing new feature development with bug fixes and maintenance activities."
  ];


  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto border border-zinc-800 rounded-[40px] p-8 md:p-12">

        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-[40px] p-8 max-w-4xl w-full flex justify-center">
            <img
              src="/gapa/Logo-Horizontal.png"
              alt="GAPA"
              className="h-40 object-contain"
            />
          </div>
        </div>

        <p className="text-center text-2xl text-zinc-200 max-w-5xl mx-auto leading-relaxed mb-15">
          Animal shelter management web application designed for animal shelters,
          NGOs and veterinary clinics. The system helps organizations manage animals,
          adoptions, veterinary care and administrative processes,
          improving operational efficiency and supporting animal welfare.
        </p>

        <p className="text-zinc-500 mb-0">
          .../Built with ...
        </p>

        <div className="flex flex-wrap md:gap-7 justify-center mb-20">

          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Next.js
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            React
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            TypeScript
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Prisma
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            PostgreSQL
          </button>

        </div>

        <div className="flex justify-end mb-24">
          <div className="max-w-2xl text-right">

            <h2 className="text-6xl font-light mb-5">
              My Contributions
            </h2>

            <p className="text-zinc-300 leading-relaxed ">
              Implemented end-to-end features, from user interface development
              to database integration. Contributed to new functionalities,
              database operations, bug fixing and overall system maintenance
              while collaborating with the development team throughout the software lifecycle.
            </p>

          </div>
        </div>

        <div className="relative border border-zinc-700 rounded-[40px] p-8 mb-20">
          <h2
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black px-6 text-4xl"
          >
            Features
          </h2>

          <div className="grid md:grid-cols-6 gap-6 mt-8">
            {features.map((feature) => (
              <InfoCard key={feature}>
                {feature}
              </InfoCard>
            ))}
          </div>
        </div>

        <ProjectGallery
          images={[
            "/gapa/gapa-lista-animais.png",
            "/gapa/gapa-cadastrar-animais.png",
            "/gapa/gapa-editar-animais.png",
            "/gapa/gapa-animais-abrigados.png",
            "/gapa/gapa-adicionar-abrigado.png",
            "/gapa/gapa-lista-castracao.png",
            "/gapa/gapa-cadastrar-castracao.png",
            "/gapa/gapa-lista-fiscalizacao.png",
            "/gapa/gapa-historico-fiscalizacao.png"

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
          Key Learnings
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
              Impact
            </h2>

            <p className="text-right text-zinc-300">
              This project provides animal protection organizations with
              a centralized platform to manage their daily operations more
              efficiently, helping improve the quality of care and administrative processes.
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}