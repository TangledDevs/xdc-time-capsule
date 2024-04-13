import HeroImage from "../assets/Hero.png";
import Dotted from "../assets/Dotted.png";
import { Button } from "./ui/button";
import { handleScroll } from "./handleScroll";

const Hero = () => {
  return (
    <div className="flex items-center gap-2 px-44 py-16 h-screen">
      <div className="w-fit lg:w-1/2 h-fit">
        <div className="w-full flex flex-col gap-5 items-start h-full max-w-[768px] top-80 left-20">
          <h1 className="text-4xl font-bold">
            The Greatest
            <br />
            way to remind the past
          </h1>
          <p className="text-2xl ">
            Create a time capsule for you, friend and family. You will be able
            to set up when and who can open this valuable chest
          </p>
          <div className="mt-5 flex items-center justify-between gap-5">
            <a
              href="#createcapsule"
              onClick={handleScroll}
              className="bg-[#3056d3] text-white py-2 px-7 rounded-lg"
            >
              Create capsule
            </a>
            <Button className="text-[#3056d3] bg-white py-4 px-7 border-[#3056D3] border-2">
              Open capsule
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-[495px] h-[515px] lg:w-1/2">
        <div className="relative w-[495px] h-[515px] mx-auto">
          <img src={HeroImage} alt="Hero" className="z-20 mx-auto" />
          <img
            src={Dotted}
            alt="Hero"
            className="w-24 h-24 absolute -bottom-10 -left-3 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
