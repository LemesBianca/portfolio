import InfoCard from "@/components/InfoCard";
import ProjectGallery from "@/components/ProjectGallery";
import GameGallery from "@/components/GameGallery";

export default function CatsAdventurePage() {

    const features = [
        "Enemy AI",
        "Unity Animator",
        "Camera Systems",
        "Combat Systems",
        "State Machines",
        "Debugging",
        "Game Feel"
    ];

    const Challenges = [
        "Boss Battles",
        "Quest System",
        "Multiple Levels",
        "Improved Art & Animation",
        "Gameplay Polish",
        "Main Menu & Settings",
        "Save System",
        "NPC interactions",
        "Player Skins"
    ];


    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-7xl mx-auto border border-zinc-800 rounded-[40px] p-8 md:p-12">

                <div className="flex justify-center mb-16">
                    <div
                        className="
                        max-w-4xl
                        w-full
                        h-[320px]
                        rounded-[40px]
                        bg-cover
                        bg-center
                        overflow-hidden
                        "
                        style={{
                            backgroundImage: "url('/cats-adventure/ca00.png')",
                        }}
                    />
                </div>

                <p className="text-center text-2xl text-zinc-200 max-w-5xl mx-auto leading-relaxed mb-15">
                    Cat's Adventure is a top-down action adventure game developed in Unity as a personal project.
                    The goal was to explore gameplay programming, AI systems, player interaction and game feel
                    while building a complete gameplay prototype.
                </p>

                <p className="text-zinc-500 mb-0">
                    .../Technologies ...
                </p>

                <div className="flex flex-wrap md:gap-7 justify-center mb-20">

                    <button className="px-15 py-3 border border-zinc-500 rounded-full">
                        Unity
                    </button>
                    <button className="px-15 py-3 border border-zinc-500 rounded-full">
                        C#
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




                <h2 className="text-6xl mb-8">
                    Gameplay Systems
                </h2>

                <div className="flex justify-end mb-8">
                    <div className="max-w-2xl text-right">

                        <h2 className="text-5xl font-light mb-5">
                            Player Controller
                        </h2>

                        <p className="text-zinc-300 leading-relaxed ">
                            Designed and implemented a modular player controller
                            with multiple movement states and combat interactions.
                        </p>

                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="order-1">
                        <GameGallery
                            images={[
                                "/cats-adventure/ca01.mp4",
                                "/cats-adventure/ca02.mp4",
                                "/cats-adventure/ca03.mp4",
                                "/cats-adventure/ca04.mp4",

                            ]}
                        />
                    </div>

                    <div className="space-y-3 order-2">

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Walk & Run
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Smooth top-down movement with different movement speeds.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Dash
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Short burst of speed used for quick repositioning and dodging.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Sneak
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Reduces movement speed while decreasing the distance at which enemies can detect the player.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Attack
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Close-range melee attack with animation-driven hit detection.
                            </p>
                        </div>
                    </div>
                </div>



                <div className=" mb-8 mt-10">
                    <div className="max-w-2xl">

                        <h2 className="text-5xl font-light mb-5">
                            Health System
                        </h2>

                        <p className="text-zinc-300 leading-relaxed ">
                            Developed a complete player health system
                            integrated with combat and respawn mechanics.
                        </p>

                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
                    <div className="order-2">
                        <GameGallery
                            images={[
                                "/cats-adventure/ca05.mp4",
                                "/cats-adventure/ca06.mp4",
                            ]}
                        />
                    </div>

                    <div className="space-y-3 order-1">

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Health Bar
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Displays the player's current health and updates dynamically as damage is taken.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Damage feedback
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Provides visual feedback through hit effects and
                                animations whenever the player takes damage.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Death
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Triggers a death sequence when the player's
                                health reaches zero, temporarily disabling gameplay.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Respawn point
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Returns the player to the sanctuary after death,
                                allowing the adventure to continue.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="flex justify-end mb-8">
                    <div className="max-w-2xl text-right">

                        <h2 className="text-5xl font-light mb-5">
                            Enemy AI
                        </h2>

                        <p className="text-zinc-300 leading-relaxed ">
                            Modular AI system built around state machines,
                            supporting multiple enemy behaviors and interactions.
                        </p>

                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="order-1">
                        <GameGallery
                            images={[
                                "/cats-adventure/ca07.mp4",
                                "/cats-adventure/ca08.mp4",
                                "/cats-adventure/ca09.mp4",
                            ]}
                        />
                    </div>

                    <div className="space-y-3 order-2">

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Enemy Type 1
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                State-based enemy AI capable of patrolling,
                                detecting the player, chasing and attacking.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Enemy Type 2
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Passive roaming enemy with random
                                movement that interacts physically with the player by
                                pushing them away instead of engaging in combat.
                            </p>
                        </div>
                    </div>
                </div>



                <div className=" mb-8 mt-10">
                    <div className="max-w-2xl">

                        <h2 className="text-5xl font-light mb-5">
                            Technical Highlights
                        </h2>

                        <p className="text-zinc-300 leading-relaxed ">
                            Developed a complete player health system
                            integrated with combat and respawn mechanics.
                        </p>

                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
                    <div className="order-2">
                        <GameGallery
                            images={[
                                "/cats-adventure/ca10.mp4",
                                "/cats-adventure/ca11.mp4",
                                "/cats-adventure/ca12.mp4",
                                "/cats-adventure/ca13.mp4",
                            ]}
                        />
                    </div>

                    <div className="space-y-3 order-1">

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Camera System
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Player-follow camera with smooth interpolation
                                for a fluid gameplay experience.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                World & Collision
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Tile-based world with collision handling
                                for obstacles and environment boundaries.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Player State Machine
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Finite State Machine controlling player actions such
                                as walking, running, sneaking, attacking and dashing.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Enemy State Machine
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Finite State Machine controlling enemy behaviors and
                                animation states, including patrol, chase, attack and death.
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <h4 className="font-semibold">
                                Animation System
                            </h4>

                            <p className="text-zinc-500 text-sm">
                                Implemented Unity Animator Controllers using Blend Trees,
                                animation parameters and state transitions for fluid 8-directional
                                movement and gameplay actions.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="relative border border-zinc-700 rounded-[40px] p-8 mb-20 mt-20">
                    <h2
                        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black px-6 text-4xl"
                    >
                        What I Learned
                    </h2>

                    <div className="grid md:grid-cols-7 gap-6 mt-8">
                        {features.map((feature) => (
                            <InfoCard key={feature}>
                                {feature}
                            </InfoCard>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end mt-10">
                    <div className="max-w-3xl">
                        <h2 className="text-7xl font-light mb-8 text-right">
                            Challenges
                        </h2>

                        <p className="text-right text-zinc-300">
                            Balancing the large number of player states while keeping
                            animation transitions responsive was one of the biggest challenges.
                            Organizing movement and combat behaviours into separate states
                            made the system easier to expand.
                        </p>
                    </div>
                </div>


                <section className="py-16 px-8">
                    <h2 className="text-5xl font-bold mb-12">
                        Roadmap
                    </h2>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    Boss Battles
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Unique boss encounters with distinct attack patterns and gameplay mechanics.
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    Quest System
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Objectives and progression system to guide exploration and player advancement.
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    Multiple Levels
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Additional handcrafted areas featuring unique layouts, enemies and challenges.
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    Improved Art & Animation
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Expanded environment art, character animations and visual polish for a richer experience.
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    Gameplay Polish
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Combat balancing, smoother controls, visual feedback and overall player experience improvements.
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    Main Menu & Settings
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Complete menu flow including settings, pause menu and game management screens.
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    Save System
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Persistent save/load system to track player progress across sessions.
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    NPC Interactions
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Rescuable NPCs with interactive dialogue and gameplay progression.
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    Player Skins
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Unlockable character appearances with cosmetic customization options.
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    Audio Improvements
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Expanded sound effects, ambient audio and background music to enhance immersion.
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 border-b border-zinc-800 pb-3 pt-3">
                            <div>
                                <h3 className="font-semibold">
                                    Performance Optimization
                                </h3>
                            </div>

                            <div className="text-zinc-400">
                                Code optimization and gameplay improvements for smoother performance and scalability.
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main >
    );
}