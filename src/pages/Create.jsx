import { useContext, useState } from "react";
import { ethers } from "ethers";
import { GlobalContext } from "../contexts/Context";
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

const Create = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [submitting, setSubmitting] = useState(0);

  console.log(state);

  const makeTimeCapsule = async () => {
    if (!message || !recipient || !dueDate || !file) {
      alert("fill all details");
      return;
    }
    // setSubmitting(1);
    // try {
    //   let msgblob = new Blob([strEncodeUTF16(message).buffer]);
    //   let titleblob = new Blob([strEncodeUTF16(title).buffer]);
    //   let msgHash = (await state.ipfs.add(msgblob, {})).path;
    //   let titleHash = (await state.ipfs.add(titleblob, {})).path;
    //   (
    //     await state.contract.registerTimeCapsule(
    //       ethers.BigNumber.from(Math.floor(dueDate.getTime() / 1000)),
    //       msgHash,
    //       titleHash
    //     )
    //   )
    //     .wait()
    //     .then(async (receipt) => {
    //       setSubmitting(2);
    //     });
    // } catch (err) {
    //   if (
    //     err.message ===
    //     "MetaMask Tx Signature: User denied transaction signature."
    //   ) {
    //     window.alert("User denied transaction");
    //     setSubmitting(0);
    //   } else {
    //     dispatch({ type: "SET_ERROR", payload: err });
    //   }
    // }
    console.log(message, recipient, dueDate, file);
  };

  const strEncodeUTF16 = (str) => {
    var buf = new ArrayBuffer(str.length * 2);
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return bufView;
  };

  return (
    <div
      id="createcapsule"
      className="min-h-[90vh] flex flex-col md:flex-row items-center w-full justify-center gap-4 md:gap-20 md:px-44 py-20 bg-[#E9F9FF]"
    >
      <div className="flex flex-col justify-center w-4/5 gap-2 space-y-4 md:w-full">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-3xl text-primary">
          Upload your Time Capsule Here
        </h2>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="media"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              {file ? (
                file.name
              ) : (
                <>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    MP4, JPEG, JPG, GIF, WebM, Mov (MAX. 10MB)
                  </p>
                </>
              )}
            </div>
          </label>
          <input
            id="media"
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full gap-10 px-10 py-8 lg:py-20">
        <div className="flex flex-col text-[#637381] bg-white px-6 lg:px-12 py-5 lg:py-10 gap-2">
          <h1 className="text-lg font-bold text-black lg:text-2xl">
            Who will get this capsule
          </h1>
          <p className="text-xl font-semibold text-black">Receiver info</p>
          <Label className="mt-3 text-sm">Message</Label>
          <Input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Write a short message"
            required
          />
          <Label className="mt-3 text-sm">Wallet or ENs</Label>
          <Input
            type="text"
            onChange={(e) => setRecipient(e.target.value)}
            value={recipient}
            placeholder="0xXXXXXXXX"
            required
          />
          <Label className="mt-3 text-sm">Date</Label>{" "}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal w-full",
                  !dueDate && "text-muted-foreground"
                )}
              >
                <CalendarDays className="w-4 h-4 mr-2" />
                {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Calendar
                mode="single"
                selected={dueDate}
                onSelect={setDueDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {/* <Link to="/review"> */}
          <Button onClick={makeTimeCapsule} className="w-full mt-2">
            Continue
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Create;
