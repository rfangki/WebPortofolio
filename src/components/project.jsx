import Project1 from "../assets/portfolio-img1.png";

const Project = () => {
  return (
    <section className="section" id="project">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading tight text-accent">My Latest Work.</h2>
              <p className="max-w-sm ">
                These are some of my best projects. I have built these with
                React.
              </p>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-72 w-full"
                src={Project1}
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 flex gap-x-10 transition-all duration-500 z-50">
                <div className="text-gradient">Live</div>
                <div className="font-bold font-primary">Code</div>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 flex gap-x-10 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Title</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-8">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-72 w-full"
                src={Project1}
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 flex gap-x-10 transition-all duration-500 z-50">
                <div className="text-gradient">Live</div>
                <div className="font-bold font-primary">Code</div>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 flex gap-x-10 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Title</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-72 w-full"
                src={Project1}
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 flex gap-x-10 transition-all duration-500 z-50">
                <div className="text-gradient">Live</div>
                <div className="font-bold font-primary">Code</div>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 flex gap-x-10 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Title</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
