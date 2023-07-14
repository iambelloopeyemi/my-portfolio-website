// import ButtonVariant from "../components/ButtonVariant";
import ViewButton from "./Button";
import GitHubButton from "./Button";

interface ProjectProps {
  subTitle: string;
  article: string;
  view: string;
  hostedUrl: string;
  github: string;
  githubUrl: string;
}

export default function Project({
  subTitle,
  article,
  view,
  hostedUrl,
  github,
  githubUrl,
}: ProjectProps) {
  return (
    <div className="grid grid-flow-col grid-cols-2 gap-10 mb-5">
      <section className="border">
        <div className="h-80 w-80">
          <img className="h-full w-full" src="" alt="" />
        </div>
      </section>
      <section>
        <div className="h-80 w-80">
          <h3 className="font-bold text-xl mb-5">{subTitle}</h3>
          <article className="text-davy-grey text-justify leading-6 mb-5">
            {article}
          </article>
          <div className="flex items-center gap-5">
            <ViewButton
              name={`${view}`}
              url={`${hostedUrl}`}
              backgroundColor="#FACF0F"
              border="none"
            />
            <GitHubButton
              name={`${github}`}
              url={`${githubUrl}`}
              backgroundColor="none"
              border="1px solid #FACF0F"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
