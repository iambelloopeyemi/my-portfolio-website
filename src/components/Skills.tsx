import { FaHtml5, FaSass, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { HiTerminal } from "react-icons/hi";

export const SkillList = [
  {
    id: 0,
    icon: <FaHtml5 className="skill-icon" />,
  },
  {
    id: 1,
    icon: <IoLogoCss3 className="skill-icon" />,
  },
  {
    id: 2,
    icon: <FaSass className="skill-icon" />,
  },
  {
    id: 3,
    icon: <SiTailwindcss className="skill-icon" />,
  },
  {
    id: 4,
    icon: <SiJavascript className="skill-icon" />,
  },
  {
    id: 5,
    icon: <FaReact className="skill-icon" />,
  },
  {
    id: 6,
    icon: <SiTypescript className="skill-icon" />,
  },
  {
    id: 7,
    icon: <FaGitAlt className="skill-icon" />,
  },
  {
    id: 8,
    icon: <FaGithub className="skill-icon" />,
  },
  {
    id: 9,
    icon: <HiTerminal className="skill-icon" />,
  },
];

export default function Skills() {
  return (
    <ul className="flex flex-wrap gap-5">
      {SkillList.map(({ id, icon }) => (
        <li key={id} className="text-night">
          {icon}
        </li>
      ))}
    </ul>
  );
}
