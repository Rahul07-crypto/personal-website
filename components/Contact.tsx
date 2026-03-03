import Reveal from "@/components/Reveal";
export default function Contact() {
  return (
   <section
  id="contact"
  className="py-28 scroll-mt-24"
>
      <Reveal>
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-slate-800/40 border border-slate-700 rounded-3xl p-10 md:p-16 shadow-2xl">

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl font-bold leading-tight">
                Let’s build something impactful.
              </h2>

              <p className="mt-6 text-slate-400 text-lg">
                I help startups and businesses create scalable React
                dashboards and modern web interfaces.
              </p>

              <div className="mt-8 space-y-4 text-slate-400">
                <p>🚀 Currently available for freelance projects</p>
                <p>⏱ I typically respond within 24 hours</p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="mailto:ragrahari977@gmail.com"
                  className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-indigo-500/20"
                >
                  Email Me Directly
                </a>

                <a
                  href="https://www.linkedin.com/in/rahul-agrahari-963832292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-600 px-6 py-3 rounded-xl hover:bg-slate-700 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* RIGHT SIDE — WORKING FORM */}
            <form
              action="https://formspree.io/f/xlgwkbjp"
              method="POST"
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />

              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded-xl font-medium transition shadow-lg shadow-indigo-500/20"
              >
                Send Message
              </button>
            </form>

          </div>

        </div>

      </div>
      </Reveal>
    </section>
  );
}