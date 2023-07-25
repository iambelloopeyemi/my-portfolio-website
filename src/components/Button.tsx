import { Link } from "react-router-dom";

interface ButtonProps {
  name: string;
  url: string;
  backgroundColor: string;
  border: string;
}

export default function Button({ name, url, backgroundColor, border }: ButtonProps) {
  return (
    <Link to={url} target="_blank">
      <button style={{backgroundColor: backgroundColor, border: border}} className="rounded px-16 py-3 font-bold">
        {name}
      </button>
    </Link>
  );
}
