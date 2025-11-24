export default function About() {
  const skills = [
    {
      title: "Modern UX Design",
      description:
        "Creating intuitive and engaging user experiences with a focus on accessibility and usability.",
      icon: "🎨",
    },
    {
      title: "React & Next.js",
      description:
        "Building performant, scalable applications with modern React patterns and Next.js framework.",
      icon: "⚛️",
    },
    {
      title: "CSS & Styling",
      description:
        "Crafting responsive, beautiful interfaces with Tailwind CSS and modern CSS techniques.",
      icon: "💅",
    },
    {
      title: "HTML & JavaScript",
      description:
        "Writing semantic, accessible HTML and clean, maintainable JavaScript code.",
      icon: "🚀",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            I enjoy working with business owners and helping them get their business on the web. Think of me as the architect and builder of your online business.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Let&apos;s Build Something Great
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                I&apos;m all about supporting local businesses and bringing their ideas to the digital world. Whether you&apos;re starting fresh with your first website, upgrading your online storefront, or giving your brand a modern redesign, I&apos;ll work with you step by step to create a strong online presence that attracts customers and grows your business. Let&apos;s build something great together — right here in our community.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <span className="px-4 py-2 rounded-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                  TypeScript
                </span>
                <span className="px-4 py-2 rounded-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                  React
                </span>
                <span className="px-4 py-2 rounded-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                  Next.js
                </span>
                <span className="px-4 py-2 rounded-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 rounded-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                  Responsive Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
