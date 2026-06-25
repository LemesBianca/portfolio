import InfoCard from "@/components/InfoCard";
import ProjectGallery from "@/components/ProjectGallery";

export default function TaskFlowPage() {

  const features = [
    "Dashboard",
    "Project Management",
    "Task Management",
    "Kanban Board",
    "Subtasks",
    "Analytics",
    "Authentication"
  ];

  const Challenges = [
    "State management",
    "API integration",
    "Database modeling",
    "Testing",
    "CI / CD"
  ];


  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto border border-zinc-800 rounded-[40px] p-8 md:p-12">

        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-[40px] p-8 max-w-4xl w-full flex justify-center">
            <img
              src="/task-flow/TaskFlowLogo.png"
              alt="TaskFlow"
              className="h-40 object-contain"
            />
          </div>
        </div>

        <p className="text-center text-2xl text-zinc-200 max-w-5xl mx-auto leading-relaxed mb-15">
          TaskFlow is a full-stack project management platform inspired by Jira and Trello.
          It allows teams to organize projects, manage tasks, track progress and collaborate
          through a modern web interface.
        </p>

        <p className="text-zinc-500 mb-0">
          .../Tech Stack ...
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
            Node.js
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Express
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Prisma
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Docker
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            PostgreSQL
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Jest
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            Playwright
          </button>
          <button className="px-15 py-3 border border-zinc-500 rounded-full">
            GitHub Actions
          </button>

        </div>



        <div className="flex justify-end mb-24">
          <div className="max-w-2xl text-right">

            <h2 className="text-6xl font-light mb-5">
              My Contributions
            </h2>

            <p className="text-zinc-300 leading-relaxed ">
              Designed and implemented the application
              architecture, database schema, REST API, frontend
              interface, testing strategy and deployment workflow.
            </p>

          </div>
        </div>

        <div className="relative border border-zinc-700 rounded-[40px] p-8 mb-30">
          <h2
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black px-6 text-4xl"
          >
            Key Features
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
            "/Task-flow/Dashboard.png",
            "/Task-flow/Projects.png",
            "/Task-flow/ProjectModalTask.png",
            "/Task-flow/ProjectModal.png",
            "/Task-flow/Tasks.png",
            "/Task-flow/NewTask.png",
            "/Task-flow/DeleteTask.png",

          ]}
        />

        <div className="relative border border-zinc-700 rounded-[40px] p-8 mb-20 mt-20">
          <h2
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black px-6 text-4xl"
          >
            Challenges
          </h2>

          <div className="grid md:grid-cols-5 gap-6 mt-8">
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



        <div className="relative border border-zinc-700 rounded-[40px] p-8 mb-20 mt-20">
          <h2
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black px-6 text-4xl"
          >
            Architecture
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div className="border border-zinc-700 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-2">
                Frontend
              </h3>

              <p className="text-zinc-400">
                Next.js + TypeScript
              </p>
            </div>

            <div className="border border-zinc-700 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-2">
                API
              </h3>

              <p className="text-zinc-400">
                Express REST API
              </p>
            </div>

            <div className="border border-zinc-700 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-2">
                ORM
              </h3>

              <p className="text-zinc-400">
                Prisma
              </p>
            </div>

            <div className="border border-zinc-700 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-2">
                Database
              </h3>

              <p className="text-zinc-400">
                PostgreSQL
              </p>
            </div>

          </div>

        </div>


        <div className="flex justify-end mt-10">

          <div className="max-w-3xl">

            <h2 className="text-7xl font-light mb-8 text-right">
              Future Improvements
            </h2>

            <ul className="text-right text-zinc-300 space-y-2">
              <li>Role-based access control</li>
              <li>Real-time collaboration</li>
              <li>Notifications</li>
              <li>File attachments</li>
              <li>AI-powered task suggestions</li>
            </ul>

          </div>

        </div>

      </div>
    </main>
  );
}