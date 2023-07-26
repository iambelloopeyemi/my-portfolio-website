import { NavLink } from "react-router-dom";
import links from "../data/navlink.json";
import { activeStyle } from "../utils/Styles";

export default function Navbar() {
  return (
    <header className="bg-seasalt px-20 py-2 z-50 shadow-lg fixed top-0 left-0 right-0">
      <nav className="h-12 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-xl text-violet-blue font-bold uppercase"
        >
          iambelloopeyemi
        </NavLink>
        <div className="flex justify-center items-center">
          {links.map((link) => (
            <NavLink
              key={link}
              to={link}
              style={activeStyle}
              className="navlink"
            >
              {link}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
