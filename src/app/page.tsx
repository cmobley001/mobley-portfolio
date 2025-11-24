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
          title="Web Developer (But Mostly a Designer)"
          subtitle="Let's get your business online with modern web technologies so that your business can start getting those conversions!"
        />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
