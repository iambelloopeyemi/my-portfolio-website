import { useState } from "react";
import links from "../data/navlink.json";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-seasalt px-4 sm:px-8 lg:px-16 py-1 sm:py-2 lg:py-3 z-50 shadow-lg">
      <nav className="h-12 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <a
            href="#home"
            className="text-base sm:text-xl font-bold text-violet-blue uppercase"
          >
            iambelloopeyemi
          </a>
        </div>
        <div className="flex justify-center items-center sm:gap-6 lg:gap-12">
          {links.map((link) => (
            <a
              href={`#${link}`}
              key={link}
              className="hidden sm:block uppercase font-semibold hover:text-violet-blue hover:scale-105"
            >
              {link}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!isOpen)}
          className="sm:hidden text-violet-blue"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {isOpen && (
        <div className="sm:hidden bg-anti-flash-white w-screen h-fit py-5 ease-in-out flex flex-col justify-center items-center gap-7 fixed top-14 left-0 right-0">
          {links.map((link) => (
            <a
              href={`#${link}`}
              key={link}
              onClick={() => setOpen(!isOpen)}
              className="font-semibold uppercase hover:text-violet-blue"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
