export default function Experience() {
    return (
        <section className="py-16 px-8">
            <h2 className="text-5xl font-bold mb-12 text-right">
                Professional Experience
            </h2>

            <div className="space-y-8">

                <div className="grid md:grid-cols-3 gap-4 border-b border-zinc-800 pb-6">
                    <div className="text-zinc-500">
                        2026 - Present
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
                        Implemented end-to-end features, from user interface
                        development to database integration, while contributing
                        to the maintenance and evolution of the GAPA system.S
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 border-b border-zinc-800 pb-6">
                    <div className="text-zinc-500">
                        2022 - 2025
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Chemical Technician
                        </h3>

                        <p className="text-zinc-400">
                            Research and Development Laboratory
                        </p>
                    </div>

                    <div className="text-zinc-400">
                        Worked on research, testing,
                        documentation and development projects.
                    </div>
                </div>

            </div>
        </section>
    );
}