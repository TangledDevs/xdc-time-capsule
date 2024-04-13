import { useState } from "react";
import { Button } from "./ui/button";
import { handleScroll } from "./handleScroll";
import Web3Connection from "./web3-connection";

const Navbar = () => {
  let Links = [
    { name: "Create Capsule", link: "#createcapsule" },
    { name: "About", link: "#about" },
    { name: "FAQs", link: "#faqs" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full px-4 py-5 bg-white shadow-md">
      <div className="items-center justify-between mx-auto bg-white md:flex md:px-14 px-7">
        <div className="flex items-center py-0 cursor-pointer text-md">
          <a href="#createcapsule" onClick={handleScroll}>
            <img
              src="/vite.svg"
              alt="vconnectglobal"
              className="w-40 h-10 md:w-56"
            />
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-[0.8rem] cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="text-xl font-medium md:ml-8 md:my-0 my-7"
            >
              <a
                href={link.link}
                onClick={(e) => {
                  handleScroll(e);
                  setOpen(false);
                }}
                className="font-medium text-black duration-500 border-b-black hover:text-slate-700"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* <Button className="bg-[#3056d3] text-white p-4 rounded-lg">
          Connect Wallet
        </Button> */}
        <Web3Connection />
      </div>
    </div>
  );
};

export default Navbar;
