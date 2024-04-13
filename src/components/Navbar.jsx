import { useState } from "react";
import { Button } from "./ui/button";
import { handleScroll } from "./handleScroll";

const Navbar = () => {
  let Links = [
    { name: "Create Capsule", link: "#createcapsule" },
    { name: "About", link: "#about" },
    { name: "FAQs", link: "#faqs" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full z-50 fixed top-0 left-0 px-4 py-5 bg-white">
      <div className="md:flex mx-auto items-center justify-between bg-white md:px-14 px-7">
        <div className="text-md py-0 cursor-pointer flex items-center">
          <a href="#createcapsule" onClick={handleScroll}>
            <img
              src="/vite.svg"
              alt="vconnectglobal"
              className="w-40 md:w-56 h-10"
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
              className="md:ml-8 text-xl font-medium md:my-0 my-7"
            >
              <a
                href={link.link}
                onClick={(e) => {
                  handleScroll(e);
                  setOpen(false);
                }}
                className="text-black font-medium border-b-black hover:text-slate-700 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Button className="bg-[#3056d3] text-white p-4 rounded-lg">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
