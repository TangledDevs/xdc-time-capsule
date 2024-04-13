import { CircleCheckBig } from "lucide-react";
import mediaImage from "../assets/media.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const MyMedia = () => {
  const [date, setDate] = useState();
  const media = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex justify-center items-center w-full gap-10 px-10 py-8 lg:px-44 lg:py-20 bg-gradient-to-b from-[#E9F9FF] to-white">
      <div className="hidden lg:flex lg:flex-col lg:gap-2">
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
      <div className="flex flex-col text-[#637381] bg-white px-6 lg:px-12 py-5 lg:py-10 gap-2">
        <h1 className="text-lg lg:text-2xl font-bold text-black">
          Who will get this capsule
        </h1>
        <p className="text-lg lg:text-xl font-semibold text-black mt-2">Sender info</p>
        <Label className="text-sm">Email</Label>
        <Input type="email" placeholder="example@gmail.com" required />
        <Label className="mt-3 text-sm">Wallet or ENs</Label>
        <Input type="text" placeholder="mytest.eth" required />
        <p className="text-xl font-semibold text-black">Receiver info</p>
        <Label className="mt-3 text-sm">Name or nickname</Label>
        <Input type="text" placeholder="Adam Gelius" required />
        <Label className="mt-3 text-sm">Email</Label>
        <Input type="email" placeholder="recepient@gmail.com" required />
        <Label className="mt-3 text-sm">Message</Label>
        <Input type="text" placeholder="Write a short message" required />
        <Label className="mt-3 text-sm">Wallet or ENs</Label>
        <Input type="text" placeholder="mytest.eth" required />
        <Label className="mt-3 text-sm">Date</Label>{" "}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Link to="/review">
          <Button className="w-full mt-2">Continue</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyMedia;
