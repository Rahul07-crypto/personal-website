import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:min-h-screen flex items-center overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-[-150px] right-[-150px] w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="max-w-xl">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15]">
            I build high-performance{" "}
            <span className="text-indigo-400">
              React dashboards
            </span>{" "}
            and modern web interfaces.
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-400">
            Helping startups and growing businesses create scalable,
            user-friendly interfaces using React and clean component architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-indigo-500/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-slate-600 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              Contact Me
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Focused on SaaS dashboards • Admin panels • Modern UI systems
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mt-12 md:mt-0 flex justify-center">

          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-3 md:p-4 shadow-2xl backdrop-blur w-full max-w-md md:max-w-none">

            <Image
              src="/images/flowdesk.png"
              alt="FlowDesk Dashboard Preview"
              width={900}
              height={600}
              priority
              className="rounded-xl w-full"
            />

          </div>

          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full"></div>

        </div>

      </div>
    </section>
  );
}