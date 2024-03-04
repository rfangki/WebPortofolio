import Nav from "../src/components/nav";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Hero from "./components/hero";
import Project from "./components/project";

const Home = () => {
  return (
    <div className="flex-col space-y-12 bg-site bg-no-repeat overflow-hidden">
      <Header />
      <Hero />
      <Nav />
      <About />
      <Project />
      <Contact />
      <div className="h-[60px]"></div>
    </div>
  );
};

export default Home;
