import { CircleCheckBig } from "lucide-react";
import mediaImage from "../assets/media.png";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Review = () => {
  const media = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex justify-center items-center w-full gap-20 px-10 py-8 lg:px-44 lg:py-20 bg-gradient-to-b from-[#E9F9FF] to-white">
      <div className="hidden lg:flex lg:flex-col lg:gap-2 lg:mt-10">
        <h5 className="text-md font-medium">ALMOST THERE</h5>
        <h1 className="mt-3 text-xl lg:text-3xl font-bold">
          Let’s review your time capsule.
        </h1>
        <div className="mt-20 flex items-start gap-3 text-[#3056d3]">
          <CircleCheckBig />
          <div className="flex flex-col items-start gap-3 font-medium text-black">
            <h3 className="font-bold">Your Media</h3>
            <span>This is your time capsule</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-3">
          {media.map((item, index) => (
            <img key={index} src={mediaImage} alt="media" />
          ))}
        </div>
      </div>
      <div className="flex flex-col text-[#637381] bg-white px-6 lg:px-12 py-5 lg:py-10 gap-4 lg:gap-5">
        <h1 className="text-black font-bold text-xl lg:text-2xl">
          Review the information
        </h1>
        <p className="text-black font-semibold text-lg lg:text-xl">Sender info</p>
        <Label>example@yourmail.com</Label>
        <Label>mytest.eth</Label>
        <p className="text-black font-semibold text-lg lg:text-xl">Receiver info</p>
        <Label>Adam Gelius</Label>
        <Label>example@yourmail.com</Label>
        <Label>Write a short message</Label>
        <Label>mytest.eth</Label>
        <Label>24/12/2090</Label>
        <div className=" mt-32 lg:mt-48 flex items-center justify-between gap-8">
          <Link to="/media">
            <Button className="text-[#3056d3] bg-white py-4 px-7 border-[#3056D3] border-2">
              Edit
            </Button>
          </Link>
          <Button className="bg-[#3056d3] text-white py-4 px-7">
            Send capsule
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Review;
