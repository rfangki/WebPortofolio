import { BsGithub, BsLinkedin } from "react-icons/bs";
import Final from "../assets/Final.png";
import GlitchText from "./Glitch";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";

const Hero = () => {
  return (
    <section className="flex items-center" id="hero">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:justify-around">
          <div className="flex-1 text-center font-secondary lg:text lg:text-left lg:ml-20">
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center mr-0 lg:mr-24 xl:mr-0 xl:text-left space-y-5 text-[55px] font-primary font-bold leading-[0.8] lg:text-[60px]"
            >
              RACHMAN FANGKI
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center mr-0 lg:mr-20 gap-[68px] mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]"
            >
              <span>
                <GlitchText />
              </span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center lg:mr-24"
            >
              A motion.assionate Front-end React Developer.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center lg:mr-28 gap-5 mt-4"
            >
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
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="mix-blend-lighten bg-top lg:mr-20"
          >
            <img src={Final} className="h-96 " />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
