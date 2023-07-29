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
    <a href={url}>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          border: border,
        }}
        className="px-12 py-3 rounded font-bold hover:scale-105"
      >
        {title}
      </button>
    </a>
  );
}
