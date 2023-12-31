interface ExternalLink {
  title: string;
  url: string;
  backgroundColor: string;
  color: string;
  border: string;
}

export default function ExternalLink({
  title,
  url,
  backgroundColor,
  color,
  border,
}: ExternalLink) {
  return (
    <a href={url} target="_blank">
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
    </a>
  );
}
