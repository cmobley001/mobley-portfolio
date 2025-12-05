import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/ProjectGallery';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* HERO SECTION */}
        <Hero
          title="Code by Design"
          subtitle="Crafting a successful website for better conversion rates."
        />

        {/* ABOUT SECTION */}
        <section id="about" className="py-20">
          <About />
        </section>

        {/* PORTFOLIO SECTION (added this on 11/26/2025) */}
        <section id="portfolio" className="py-20 bg-base-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Selected Work</h2>
            {/* This renders the grid + modals you built with the Agent */}
            <ProjectGallery />
          </div>
        </section>

        {/* BLOG SECTION (added this on 11/26/2025) */}
        <section id="blog" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Latest Thoughts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* BLOG CARD 1: Links to MDX slug */}
              <Link
                href="/blog/my-first-post"
                className="card bg-base-100 shadow-xl hover:scale-105 transition-transform border border-base-200"
              >
                <div className="card-body">
                  <div className="badge badge-primary mb-2">Blog</div>
                  <h3 className="card-title">My First Post</h3>
                  <p>Some information about myself.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-ghost">Read Article →</button>
                  </div>
                </div>
              </Link>

              {/* BLOG CARD 2: Placeholder */}
              <div className="card bg-base-100 shadow-xl opacity-50">
                <div className="card-body">
                  <div className="badge badge-neutral mb-2">Coming Soon</div>
                  <h3 className="card-title">More Content Soon</h3>
                  <p>Stay tuned for updates on my final project.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-base-200">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
