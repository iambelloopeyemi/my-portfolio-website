import Underline from "../components/Underline";
import Project from "../components/Project";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section className="bg-anti-flash-white h-fit px-4 sm:px-20 pt-32">
      <header className="section-header">
        <h2 className="heading">projects</h2>
        <Underline />
      </header>
      <div className="flex flex-col items-center">
        {projects.map(
          ({ id, title, article, thumbnail, alt, hostedUrl, githubUrl }) => (
            <Project
              key={id}
              title={title}
              article={article}
              thumbnail={thumbnail}
              alt={alt}
              view="VIEW"
              hostedUrl={hostedUrl}
              github="GITHUB"
              githubUrl={githubUrl}
            />
          )
        )}
      </div>
    </section>
  );
}
