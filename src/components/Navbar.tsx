import { useState } from "react";
import { NavLink } from "react-router-dom";
import links from "../data/navlink.json";
import { activeStyle } from "../utils/Styles";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-seasalt px-4 sm:px-20 py-2 z-50 shadow-lg fixed top-0 left-0 right-0">
      <nav className="h-12 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-base sm:text-xl text-violet-blue font-bold uppercase"
        >
          iambelloopeyemi
        </NavLink>
        <div className="flex justify-center items-center">
          {links.map((link) => (
            <NavLink
              key={link}
              to={link}
              style={activeStyle}
              className="hidden sm:block sm:px-7 sm:py-5 font-semibold uppercase hover:text-violet-blue hover:scale-105"
            >
              {link}
            </NavLink>
          ))}
        </div>
        <button
          onClick={() => setOpen(!isOpen)}
          className="sm:hidden h-8 w-8 text-violet-blue"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {isOpen && (
        <div className="sm:hidden bg-anti-flash-white w-screen h-fit py-5 flex flex-col justify-center items-center gap-7 fixed top-16 left-0 right-0">
          {links.map((link) => (
            <NavLink
              key={link}
              to={link}
              style={activeStyle}
              className="font-semibold uppercase hover:text-violet-blue hover:scale-105"
            >
              {link}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
