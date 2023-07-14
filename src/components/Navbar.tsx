import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 px-12 py-2 z-20">
      <nav className="h-12 flex justify-between items-center">
        <div className="font-bold text-lg text-vivid-yellow">
          <NavLink to="/">OPEYEMI BELLO</NavLink>
        </div>

        <div className="flex justify-center items-center">
          <NavLink
            to="home"
            style={({ isActive }) => {
              return isActive ? { color: "#FACF0F" } : {};
            }}
            className="active px-7 py-5 font-semibold hover:text-vivid-yellow"
          >
            HOME
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => {
              return isActive ? { color: "#FACF0F" } : {};
            }}
            className="px-7 py-5 font-semibold hover:text-vivid-yellow"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="projects"
            style={({ isActive }) => {
              return isActive ? { color: "#FACF0F" } : {};
            }}
            className="px-7 py-5 font-semibold hover:text-vivid-yellow"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="contact"
            style={({ isActive }) => {
              return isActive ? { color: "#FACF0F" } : {};
            }}
            className="px-7 py-5 font-semibold hover:text-vivid-yellow"
          >
            CONTACT
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
