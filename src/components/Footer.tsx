import { SocialMedia } from "../components/SocialMedia";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-night py-10 text-white grid gap-5">
      <div className="flex justify-center items-center gap-5">
        {SocialMedia.map(({ id, link, icon }) => (
          <a key={id} href={link} target="_blank">
            {icon}
          </a>
        ))}
      </div>
      <p className="text-sm flex items-center justify-center gap-2">
        © copyright {currentYear}. Made by
        <a
          href="https://iambelloopeyemi.netlify.app"
          target="_blank"
          className="font-bold underline hover:scale-105"
        >
          Opeyemi Bello
        </a>
      </p>
    </footer>
  );
}
