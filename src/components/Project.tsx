import ViewButton from "./ExternalLink";
import GitHubButton from "./ExternalLink";

interface ProjectProps {
  title: string;
  article: string;
  thumbnail: string;
  alt: string;
  view: string;
  hostedUrl: string;
  github: string;
  githubUrl: string;
}

export default function Project({
  title,
  article,
  thumbnail,
  alt,
  view,
  hostedUrl,
  github,
  githubUrl,
}: ProjectProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 sm:gap-8 mb-16">
      <div className=" w-fit h-fit border rounded shadow-lg hover:cursor-pointer hover:scale-105">
        <img className="h-full w-full object-fill" src={thumbnail} alt={alt} />
      </div>
      <div className="w-fit h-fit">
        <h3 className="text-xl font-bold mb-5">{title}</h3>
        <article className="article">
          {article}
        </article>
        <div className="flex items-center justify-center sm:justify-start gap-5">
          <ViewButton
            title={`${view}`}
            url={`${hostedUrl}`}
            backgroundColor="#3943B7"
            color="#FFF"
            border="none"
          />
          <GitHubButton
            title={`${github}`}
            url={`${githubUrl}`}
            backgroundColor="none"
            color="#3943B7"
            border="1px solid #3943B7"
          />
        </div>
      </div>
    </div>
  );
}
