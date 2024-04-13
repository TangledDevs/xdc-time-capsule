import { CircleCheckBig } from "lucide-react";

const Create = () => {
  return (
    <div
      id="createcapsule"
      className="min-h-[90vh] flex w-full justify-center gap-20 px-44 py-20 bg-gradient-to-b from-[#E9F9FF] to-white"
    >
      <div className="flex flex-col gap-2 mt-10">
        <div className="mt-20 flex items-start gap-2 text-[#3056d3]">
          <CircleCheckBig />
          <div className="flex flex-col items-start gap-4 font-medium text-black">
            <h3 className="font-bold">Your Media</h3>
            <span>This is your time capsule</span>
          </div>
        </div>
        <div className=" w-full flex flex-col items-center justify-center min-h-[30vh] mx-auto">
          <p className="text-center w-full text-xl">
            Upload a file or drag and drop MP4, JPEG, JPG, GIF, WebM, Mov up to
            10MB
          </p>
          <input type="file" id="file" className="hidden" />
          <label
            htmlFor="file"
            className="mt-5 text-[#3056d3] bg-white py-2 cursor-pointer rounded-lg px-10 border-[#3056D3] border-2 w-fit"
          >
            Add Files
          </label>
        </div>
      </div>
    </div>
  );
};

export default Create;
