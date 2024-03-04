import { BsGithub, BsLinkedin } from "react-icons/bs";
import Final from "../assets/Final.png";
import GlitchText from "./Glitch";

const Hero = () => {
  return (
    <section className="flex items-center" id="hero">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:justify-around">
          <div className="flex-1 text-center font-secondary lg:text lg:text-left lg:ml-20">
            <p className="space-y-5 text-[55px] font-primary font-bold leading-[0.8] lg:text-[60px]">
              RACHMAN FANGKI
            </p>
            <div className="flex justify-center mr-0 lg:mr-20 gap-[68px] mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]">
              <span>
                <GlitchText />
              </span>
            </div>
            <p>A Passionate Front-end React Developer.</p>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <a
                href="https://github.com/rfangki"
                target="_blank"
                className="cursor-pointer"
              >
                <BsGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/rfangki/"
                target="_blank"
                className="cursor-pointer"
              >
                <BsLinkedin size={28} />
              </a>
            </div>
          </div>
          <div className="mix-blend-lighten bg-top lg:mr-20">
            <img src={Final} className="h-96 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
