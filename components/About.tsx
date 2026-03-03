import Reveal from "@/components/Reveal";
export default function About() {
  return (
    <section id="about" className="py-28 scroll-mt-24">
      <Reveal>
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">About</h2>

      <p className="text-slate-400 max-w-3xl">
  I specialize in building scalable frontend systems using React and modern UI architecture.
  My focus is on clean component design, maintainable structure, and responsive interfaces
  that support real-world product growth.
  
  I’m currently open to freelance opportunities involving dashboards,
  admin panels, and SaaS-oriented web applications.
</p>

      </div>
        </Reveal>
    </section>
  );
}