import { CircleCheckBig } from "lucide-react";
import mediaImage from "../assets/media.png";
import { Button } from "@/components/ui/button";

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
        <div className="mt-3 grid grid-cols-4 gap-3">
          {media.map((item, index) => (
            <img key={index} src={mediaImage} alt="media" />
          ))}
        </div>
        <Button className="mt-20 text-[#3056d3] bg-white py-4 px-10 border-[#3056D3] border-2 w-fit">
          Edit Files
        </Button>
      </div>
      <div className="flex flex-col text-[#637381] bg-white px-12 py-10 gap-3">
        <h1 className="text-black font-bold text-2xl">
          Who will get this capsule
        </h1>
        <p className="text-black font-semibold text-xl">Sender info</p>
        <span className="text-sm">Email</span>
        {/* <input
          type="email"
          name="email"
          id="email"
          className="border-none p-2"
          required
        /> */}
        <p>example@yourmail.com</p>
        <span className="mt-3 text-sm">Wallet or ENs</span>
        {/* <input
          type="text"
          name="EN"
          id="EN"
          className="border-none p-2"
          required
        /> */}
        <p>mytest.eth</p>
        <p className="text-black font-semibold text-xl">Receiver info</p>
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
        <Button className="bg-[#3056d3] text-white py-4 px-7">Continue</Button>
      </div>
    </div>
  );
};

export default MyMedia;
