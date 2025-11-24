import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero
          title="Web Developer & Designer"
          subtitle="Creating modern, responsive, and user-friendly web experiences with React, Next.js, and cutting-edge technologies"
        />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
