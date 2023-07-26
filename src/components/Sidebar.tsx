import { SocialMedia } from "./SocialMedia";

export default function Sidebar() {
  return (
    <aside className="bg-seasalt p-3 rounded z-10 shadow-lg absolute left-0 top-1/2 translate-x-1/2">
      <nav className="grid gap-5">
        {SocialMedia.map(({ id, link, icon }) => (
          <a key={id} href={link} target="_blank">
            {icon}
          </a>
        ))}
      </nav>
    </aside>
  );
}
