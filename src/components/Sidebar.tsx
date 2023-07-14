import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="bg-very-light-gray rounded shadow-lg w-14 absolute left-0 top-1/2 translate-x-1/2 p-1 z-10">
      <nav className="grid justify-center gap-5">
        <a href="#">
          <FaGithub className="h-8 w-8" />
        </a>
        <a href="#">
          <FaLinkedin className="h-8 w-8" />
        </a>
        <a href="#">
          <FaTwitter className="h-8 w-8" />
        </a>
      </nav>
    </aside>
  );
}
