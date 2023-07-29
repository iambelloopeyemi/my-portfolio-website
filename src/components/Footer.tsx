import { SocialMedia } from "../utils/SocialMedia";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night px-2 py-10 text-white grid gap-5">
      <div className="flex justify-center items-center gap-5">
        {SocialMedia.map(({ id, link, icon }) => (
          <a href={link} key={id} target="_blank">
            {icon}
          </a>
        ))}
      </div>
      <div className="text-sm text-center">
        © copyright {currentYear}. Made by Opeyemi Bello
      </div>
    </footer>
  );
}
