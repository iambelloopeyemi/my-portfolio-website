import Underline from "../components/Underline";
import Project from "../components/Project";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="bg-seasalt h-fit px-5 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-14">
      <header className="text-center flex flex-col items-center gap-3 sm:gap-5 mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase">projects</h2>
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
