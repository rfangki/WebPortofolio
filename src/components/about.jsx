import CSS from "../assets/css-3.png";
import HTML from "../assets/html-5.png";
import JS from "../assets/js.png";
import TS from "../assets/typescript.png";
import Tailwind from "../assets/tailwind.png";
import ReactLogo from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex-1">
          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h2 text-accent"
          >
            About me.
          </motion.h2>
          <motion.h3
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h3 whitespace-break-spaces text-justify"
          >
            Passionate about web development, specifically with React Js.
            Successfully completed various projects, including MyTouristTicket,
            a tourist attractions ticket booking app where I led UI/UX
            development, UI slicing, and API integration. Eager to leverage my
            skills in a new opportunity as a Frontend Engineer, focused solely
            on React. Detail-oriented and enthusiastic, I bring proficiency in
            HTML and CSS, along with expertise in React. Ready to tackle
            challenges and enhance user experiences through coding and debugging
            skills.
          </motion.h3>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-10 flex gap-5 lg:gap-14 items-center justify-center"
          >
            <img src={HTML} className="w-7 h-7" />
            <img src={CSS} className="w-7 h-7" />
            <img src={JS} className="w-7 h-7" />
            <img src={TS} className="w-7 h-7" />
            <img src={ReactLogo} className="w-7 h-7" />
            <img src={Tailwind} className="w-7 h-6" />
            <img src={bootstrap} className="w-10 h-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
