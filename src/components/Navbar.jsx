import { useState } from "react";
import Web3Connection from "./web3-connection.jsx";
import { Link } from "react-router-dom";
import { TimerReset } from "lucide-react";

const Navbar = () => {
  let Links = [
    { name: "Create Capsule", link: "#createcapsule" },
    { name: "About", link: "#about" },
    { name: "FAQs", link: "#faqs" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between w-full h-16 max-w-screen-2xl">
        <Link to="/" className="flex items-center mr-6 space-x-2">
          <TimerReset />
          {/* <Icons className="w-6 h-6" /> */}
          <span className="font-bold">Time Capsule</span>
        </Link>
        {/* <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-[0.8rem] cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div> */}

        {/* <ul
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
        </ul> */}
        {/* <Button className="bg-[#3056d3] text-white p-4 rounded-lg">
          Connect Wallet
        </Button> */}
        <Web3Connection />
      </div>
    </nav>
  );
};

export default Navbar;
