import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const projects = [
    {
      title: "Landing Page",
      desc: "Conversion-focused layout designed for startup product launches and marketing campaigns.",
      image: "/images/landing.png",
      live: "https://modern-landing-page-seven-rust.vercel.app/",
      code: "https://github.com/Rahul07-crypto/modern-landing-page",
    },
    {
      title: "Analytics Dashboard",
      desc: "Scalable analytics interface built using reusable React components and modular layout structure.",
      image: "/images/Dashboard.png",
      live: "https://admin-dashboard-iota-livid-29.vercel.app/",
      code: "https://github.com/Rahul07-crypto/Admin-Dashboard",
    },
    {
      title: "AI Tools Directory",
      desc: "Dynamic filtering interface designed for structured content browsing and scalable listings.",
      image: "/images/AI-directory.png",
      live: "https://ai-tools-directory-zeta-dusky.vercel.app/",
      code: "https://github.com/Rahul07-crypto/AI-tools-directory",
    },
  ];

  return (
    <section id="projects" className="py-28 scroll-mt-24">
      <Reveal>
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Other Interface Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-5 shadow-lg hover:-translate-y-2 hover:shadow-indigo-500/10 transition duration-300"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-xl group-hover:scale-105 transition duration-300"
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                {project.desc}
              </p>

              <div className="mt-6 flex gap-6 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
      </Reveal>
    </section>
  );
}