import Project from "../components/Project";

export default function Projects() {
  return (
    <div className="bg-very-light-gray h-fit px-16 pt-28 pb-3">
      <div className="mb-5">
        <h1 className="font-bold text-4xl text-center mb-5">PROJECTS</h1>
        <h5 className="text-center text-xl">
          Here you will find some of the personal and group projects that I have
          build
        </h5>
      </div>
      <div className="grid justify-center">
        <Project
          subTitle="Cash2go"
          article="Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally"
          view="VIEW"
          hostedUrl="https://github.com/iambelloopeyemi"
          github="GITHUB"
          githubUrl="https://github.com/iambelloopeyemi"
        />

        <Project
          subTitle="Cash2go"
          article="Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally"
          view="VIEW"
          hostedUrl="https://github.com/iambelloopeyemi"
          github="GITHUB"
          githubUrl="https://github.com/iambelloopeyemi"
        />

        <Project
          subTitle="Cash2go"
          article="Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally"
          view="VIEW"
          hostedUrl="https://github.com/iambelloopeyemi"
          github="GITHUB"
          githubUrl="https://github.com/iambelloopeyemi"
        />
      </div>
    </div>
  );
}
