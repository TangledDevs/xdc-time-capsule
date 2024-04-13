// import { CircleCheckBig } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ethers } from "ethers";
import { GlobalContext } from "../contexts/Context";

const Create = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [submitting, setSubmitting] = useState(0);

  const navigate = useNavigate();
  console.log(file);
  if (file) {
    navigate("/media");
  }

  const makeTimeCapsule = async () => {
    if (title.length > 60) {
      window.alert(
        "Your title is too long. It should be less than 60 characters"
      );
    } else {
      setSubmitting(1);
      try {
        let msgblob = new Blob([strEncodeUTF16(message).buffer]);
        let titleblob = new Blob([strEncodeUTF16(title).buffer]);
        let msgHash = (await state.ipfs.add(msgblob, {})).path;
        let titleHash = (await state.ipfs.add(titleblob, {})).path;
        (
          await state.contract.registerTimeCapsule(
            ethers.BigNumber.from(Math.floor(dueDate.getTime() / 1000)),
            msgHash,
            titleHash
          )
        )
          .wait()
          .then(async (receipt) => {
            setSubmitting(2);
          });
      } catch (err) {
        if (
          err.message ===
          "MetaMask Tx Signature: User denied transaction signature."
        ) {
          window.alert("User denied transaction");
          setSubmitting(0);
        } else {
          dispatch({ type: "SET_ERROR", payload: err });
        }
      }
    }
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
      className="min-h-[90vh] flex w-full justify-center gap-20 md:px-44 py-20 bg-gradient-to-b from-[#E9F9FF] to-white"
    >
      <div className="flex flex-col justify-center w-4/5 gap-2 space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-3xl text-primary">
          Upload your Time Capsule Here
        </h2>
        {/* <div className="mt-20 flex items-start gap-2 text-[#3056d3]">
          <CircleCheckBig />
          <div className="flex flex-col items-start gap-4 font-medium text-black">
            <h3 className="font-bold">Your Media</h3>
            <span>This is your time capsule</span>
          </div>
        </div> */}

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
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                MP4, JPEG, JPG, GIF, WebM, Mov (MAX. 10MB)
              </p>
            </div>
          </label>
          <input
            id="media"
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {/* <div className=" w-full flex flex-col items-center justify-center min-h-[30vh] mx-auto">
          <p className="w-full text-xl text-center">
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
        </div> */}
      </div>
    </div>
  );
};

export default Create;
