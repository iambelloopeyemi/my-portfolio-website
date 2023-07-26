import { Link } from "react-router-dom";

interface InternalLink {
  title: string;
  url: string;
  backgroundColor: string;
  color: string;
  border: string;
}

export default function InternalLink({
  title,
  url,
  backgroundColor,
  color,
  border,
}: InternalLink) {
  return (
    <Link to={url}>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          border: border,
        }}
        className="px-12 py-3 rounded hover:scale-105 font-bold"
      >
        {title}
      </button>
    </Link>
  );
}
