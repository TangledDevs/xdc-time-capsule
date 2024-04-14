import HeroImage from "../assets/Hero.png";
import Dotted from "../assets/Dotted.png";
import { Button } from "./ui/button";
import { handleScroll } from "./handleScroll";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full py-14">
      <div className="container items-center px-4 space-y-12 md:flex md:px-6">
        <div className="w-fit lg:w-1/2 h-fit">
          <div className="w-full flex flex-col gap-5 items-start h-full max-w-[768px] top-80 left-20">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              The Greatest
              <br />
              way to remind the past
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Create a time capsule for you, friend and family. You will be able
              to set up when and who can open this valuable chest
            </p>
            <div className="flex items-center justify-between gap-5 mt-5">
              <Button>
                <a href="#createcapsule" onClick={handleScroll}>
                  Create capsule
                </a>
              </Button>

              <Link to="/capsules">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:text-primary"
                >
                  Open capsule
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex lg:w-1/2">
          <div className="relative w-[495px] h-[515px] start-36">
            <img src={HeroImage} alt="Hero" className="z-20 mx-auto" />
            <img
              src={Dotted}
              alt="Hero"
              className="absolute z-10 w-24 h-24 -bottom-10 -left-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
