import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects/>
      {/* Projects, About, Footer will go here */}
    </>
  );
}
