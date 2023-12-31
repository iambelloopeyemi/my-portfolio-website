import { SocialMedia } from "../utils/SocialMedia";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block bg-seasalt p-3 rounded z-10 shadow-lg absolute left-0 top-1/2 translate-x-1/2">
      <nav className="grid gap-5">
        {SocialMedia.map(({ link, icon }, index) => (
          <a href={link} key={index} target="_blank">
            {icon}
          </a>
        ))}
      </nav>
    </aside>
  );
}
