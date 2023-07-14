import { FaHtml5, FaSass, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { HiTerminal } from "react-icons/hi";

export const SkillList = [
  {
    id: 0,
    icon: <FaHtml5 className="h-12 w-12" />,
  },
  {
    id: 1,
    icon: <IoLogoCss3 className="h-12 w-12" />,
  },
  {
    id: 2,
    icon: <FaSass className="h-12 w-12" />,
  },
  {
    id: 3,
    icon: <SiTailwindcss className="h-12 w-12" />,
  },
  {
    id: 4,
    icon: <SiJavascript className="h-12 w-12" />,
  },
  {
    id: 5,
    icon: <FaReact className="h-12 w-12" />,
  },
  {
    id: 6,
    icon: <SiTypescript className="h-12 w-12" />,
  },
  {
    id: 7,
    icon: <FaGitAlt className="h-12 w-12" />,
  },
  {
    id: 8,
    icon: <FaGithub className="h-12 w-12" />,
  },
  {
    id: 8,
    icon: <HiTerminal className="h-12 w-12" />,
  },
];

export default function Skills() {
  return (
    <ul className="flex flex-wrap gap-5 text-davy-grey">
      {SkillList.map((item) => (
        <li key={item.id}>{item.icon}</li>
      ))}
    </ul>
  );
}
