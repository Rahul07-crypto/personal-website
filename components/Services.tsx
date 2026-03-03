"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "SaaS Dashboard Interfaces",
    image: "/images/flowdesk.png",
    desc: "Scalable dashboard layouts with clean component architecture.",
  },
  {
    title: "Admin Panels",
    image: "/images/Dashboard.png",
    desc: "Role-based admin interfaces with data visualization.",
  },
  {
    title: "Landing Pages",
    image: "/images/landing.png",
    desc: "Conversion-focused landing pages for startups and products.",
  },
  {
    title: "Component-Based UI Systems",
    image: "/images/AI-directory.png",
    desc: "Reusable UI systems designed for long-term scalability.",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="py-28 scroll-mt-24">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What I Can Help You With
          </h2>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium">
                    {service.title}
                  </span>
                  <span className="text-xl">
                    {active === index ? "−" : "+"}
                  </span>
                </button>

                {active === index && (
                  <div className="px-6 pb-6 grid md:grid-cols-2 gap-6 items-center">
                    <p className="text-slate-400">
                      {service.desc}
                    </p>

                    <div className="bg-slate-900 border border-slate-700 rounded-xl p-3">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}