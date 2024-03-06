import Paket1 from "../assets/Paket_1.png";
import Paket2 from "../assets/Paket_2.png";
import Paket3 from "../assets/Paket_3.png";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";

const Project = () => {
  return (
    <section className="section lg:pt-48" id="project">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className=""
            >
              <h2 className="h2 leading tight text-accent">My Latest Work.</h2>
              <p className="max-w-sm lg:pb-[126px]">
                I'm activelyinvolved in a myriad of cutting-edge projects, some
                still unfolding and others already triumphantly completed.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-72 w-full mix-blend-lighten"
                src={Paket3}
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-[184px] flex gap-x-10 transition-all duration-500 z-50">
                <a
                  href="https://jdihmusirawasutara.com/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <div className="text-gradient">Live</div>
                </a>
                <a
                  href="https://github.com/rfangki/jdih-muratara"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <div className="font-bold font-primary">Code</div>
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-[152px] flex gap-x-10 transition-all duration-700 z-50">
                <span className="text-3xl text-white cursor-default">
                  JDIH Musi Rawas Utara
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-3 flex gap-x-10 transition-all duration-900 z-50 mr-10">
                <span className="text-sm text-justify">
                  "Embarking on an exciting venture with JDIH Musi Rawas Utara,
                  my <span className="font-bold">ONGOING</span> project is set
                  to revolutionize their document input procedures. While the
                  current UI and features are in the early stages, offering a
                  basic overview due to unforeseen circumstances, this
                  innovative platform ensures efficient regulation management.
                  Moreover, it opens up a seamless avenue for the community to
                  explore and engage with a wealth of articles, documents, and
                  regulations published by JDIH Musi Rawas Utara.
                </span>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col gap-y-8">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-72 w-full mix-blend-lighten"
                src={Paket2}
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-[124px] flex gap-x-10 transition-all duration-500 z-50">
                <a
                  href="https://my-tourist-tiket.vercel.app/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <div className="text-gradient cursor-pointer">Live</div>
                </a>
                <a
                  href="https://github.com/rfangki/MyTouristTicket."
                  target="_blank"
                  className="cursor-pointer"
                >
                  <div className="hover:font-semibold font-primary cursor-pointer">
                    Code
                  </div>
                </a>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-[93px] flex gap-x-10 transition-all duration-700 z-50">
                <span className="text-3xl text-white cursor-default">
                  MyTouristTicket
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-3 flex gap-x-10 transition-all duration-900 z-50 mr-10">
                <span className="text-sm cursor-default text-justify">
                  My Capstone project: A visionary web endeavor intricately
                  crafted to revolutionize the ticket booking experience,
                  offering seamless access to an array of captivating tourist
                  attractions scattered across the diverse landscapes of
                  Indonesia's vibrant cities.
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-72 w-full mix-blend-lighten"
                src={Paket1}
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 flex gap-x-10 transition-all duration-500 z-50">
                <a
                  href="https://e-commerce-seven-coral.vercel.app/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <div className="text-gradient cursor-pointer">Live</div>
                </a>
                <a
                  href="https://github.com/rfangki/RedStore"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <div className="hover:font-semibold font-primary cursor-pointer">
                    Code
                  </div>
                </a>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-[76px] flex gap-x-10 transition-all duration-700 z-50">
                <span className="text-3xl text-white cursor-default">
                  RedStore
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-3 flex gap-x-10 transition-all duration-900 z-50 mr-10">
                <span className="text-sm cursor-default text-justify">
                  A groundbreaking online venture that redefines the art of
                  shopping, boasting an array of cutting-edge features
                  meticulously curated to elevate your online shopping journey
                  to unprecedented heights.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
