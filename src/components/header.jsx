import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import Logo from "../assets/Logo.svg";
import Backsound from "../assets/backsound.mp3";
import { useEffect, useState } from "react";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(Backsound);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.4;
    if (isPlaying) {
      audio.play();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, isPlaying]);

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img src={Logo} className="w-36" />
          <div className="flex gap-16">
            <button onClick={togglePlay}>
              {isPlaying ? (
                <BiVolumeFull size={24} />
              ) : (
                <BiVolumeMute size={24} />
              )}
            </button>
            <a
              href="https://wa.me/085764752896"
              target="_blank"
              className="cursor-pointer"
            >
              <button className="btn btn-sm">Work with me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
