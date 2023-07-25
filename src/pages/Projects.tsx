import Project from "../components/Project";
import Cash2go from "../assets/cash2go.png";
import starWarsMovies from "../assets/star_wars_movie.png";
import portfolioWebsite from "../assets/portfolio_website.png";

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
          thumbnail={Cash2go}
          view="VIEW"
          hostedUrl="https://cash2go.netlify.app/"
          github="GITHUB"
          githubUrl="https://github.com/group2-team2-fdev2/cash2go"
        />

        <Project
          subTitle="Cash2go"
          article="Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally"
          thumbnail={starWarsMovies}
          view="VIEW"
          hostedUrl="https://starwarsmoviesfranchise.netlify.app"
          github="GITHUB"
          githubUrl="https://github.com/iambelloopeyemi/starwars-movie-franchise-app"
        />

        <Project
          subTitle="Cash2go"
          article="Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally"
          thumbnail={portfolioWebsite}
          view="VIEW"
          hostedUrl="https://iambelloopeyemi.netlify.app/"
          github="GITHUB"
          githubUrl="https://github.com/iambelloopeyemi/my-portfolio-website"
        />
      </div>
    </div>
  );
}
