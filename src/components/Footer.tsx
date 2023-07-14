import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-10">
      <div className="grid justify-center gap-5">
        <div className="flex justify-center items-center gap-5">
          <a href="#">
            <FaGithub className="h-8 w-8" />
          </a>
          <a href="#">
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a href="#">
            <FaTwitter className="h-8 w-8" />
          </a>
        </div>
        <p className="text-sm flex items-center gap-1">
          <span>©</span>
          copyright {currentYear}. Made by
          <a href="#" className="font-bold underline">
            Opeyemi Bello
          </a>
        </p>
      </div>
    </footer>
  );
}
