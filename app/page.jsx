import HomeIntro from "./components/HomeIntro";
import HomeImage from "./components/HomeImage";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen -mt-10 pl-11" id="home">
        <HomeIntro />
        <HomeImage />
      </div>
      <div className="flex h-screen px-11" id="about">
        <About />
      </div>
      <div className="flex h-screen pl-11" id="education">
        <Education />
      </div>
      <div className="flex h-screen pl-11" id="experience">
        <Experience />
      </div>
      <div className="flex h-screen pl-11" id="projects">
        <Projects />
      </div>
    </div>
  );
}