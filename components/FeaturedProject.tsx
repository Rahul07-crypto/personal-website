"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-28 scroll-mt-24">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Project
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE IMAGE */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 shadow-2xl">
              <Image
                src="/images/flowdesk.png"
                alt="FlowDesk Dashboard"
                width={900}
                height={600}
                className="rounded-xl"
              />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div>

              <h3 className="text-2xl font-semibold mb-4">
                FlowDesk — SaaS Productivity Dashboard
              </h3>

              <p className="text-slate-400 mb-6">
                A modern productivity dashboard designed to simulate a real-world
                SaaS interface used by teams to manage tasks, categories,
                and workflow efficiency.
              </p>

              <div className="space-y-3 text-slate-300 mb-6">
                <p>• Modular component-based architecture</p>
                <p>• Local storage state persistence</p>
                <p>• Responsive dashboard layout system</p>
                <p>• Clean reusable UI patterns</p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://flowdesk-live-link.com"
                  target="_blank"
                  className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-indigo-500/20"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/your-repo-link"
                  target="_blank"
                  className="border border-slate-600 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
                >
                  View Code
                </a>
              </div>

            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}