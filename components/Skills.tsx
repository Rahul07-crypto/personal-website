import Reveal from "@/components/Reveal";
export default function Skills() {
  return (
    <section id="skills" className="py-28 scroll-mt-24">
         <Reveal>
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Technical Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Interface Development */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">
              Interface Development
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li>React & Component Architecture</li>
              <li>Responsive UI Design</li>
              <li>Reusable UI Systems</li>
            </ul>
          </div>

          {/* State & Logic */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">
              State & Logic
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li>State Management</li>
              <li>API Integration</li>
              <li>Local Storage Handling</li>
            </ul>
          </div>

          {/* Deployment & Tools */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">
              Deployment & Tools
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li>Git & GitHub Workflow</li>
              <li>Vercel Deployment</li>
              <li>Basic Figma Collaboration</li>
            </ul>
          </div>

        </div>
      </div>
        </Reveal>
    </section>
  );
}