import { CircleCheckBig } from "lucide-react";
import mediaImage from "../assets/media.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MyMedia = () => {
  const media = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex justify-center items-center w-full gap-10 px-44 py-20 bg-gradient-to-b from-[#E9F9FF] to-white">
      <div className="flex flex-col gap-2">
        <div className="mt-10 flex items-start gap-3 text-[#3056d3]">
          <CircleCheckBig />
          <div className="flex flex-col items-start gap-3 font-medium text-black">
            <h3 className="font-bold">Your Media</h3>
            <span>This is your time capsule</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-3">
          {media.map((item, index) => (
            <img key={index} src={mediaImage} alt="media" />
          ))}
        </div>
        <Button className="mt-20 text-[#3056d3] bg-white py-4 px-10 border-[#3056D3] border-2 w-fit">
          Edit Files
        </Button>
      </div>
      <div className="flex flex-col text-[#637381] bg-white px-12 py-10 gap-3">
        <h1 className="text-2xl font-bold text-black">
          Who will get this capsule
        </h1>
        <p className="text-xl font-semibold text-black">Sender info</p>
        <span className="text-sm">Email</span>
        {/* <input
          type="email"
          name="email"
          id="email"
          className="p-2 border-none"
          required
        /> */}
        <p>example@yourmail.com</p>
        <span className="mt-3 text-sm">Wallet or ENs</span>
        {/* <input
          type="text"
          name="EN"
          id="EN"
          className="p-2 border-none"
          required
        /> */}
        <p>mytest.eth</p>
        <p className="text-xl font-semibold text-black">Receiver info</p>
        <span className="mt-3 text-sm">Name or nickname*</span>
        <p>Adam Gelius</p>
        <span className="mt-3 text-sm">Email</span>
        <p>example@yourmail.com</p>
        <span className="mt-3 text-sm">Message</span>
        <p>Write a short message</p>
        <span className="mt-3 text-sm">Wallet or ENs</span>
        <p>mytest.eth</p>
        <span className="mt-3 text-sm">Date</span>
        <p>24/12/2090</p>
        <Link to="/review">
          <Button className="w-full">Continue</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyMedia;
