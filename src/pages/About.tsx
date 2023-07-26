import Underline from "../components/Underline";
import Bio from "../components/Bio";
import Button from "../components/InternalLink";
import Skills from "../components/Skills";


export default function About() {
  return (
    <section className="bg-anti-flash-white h-fit px-20 pt-32 pb-16">
      <header className="section-header">
        <h2 className="heading">about me</h2>
        <Underline />
        <h5 className="subheading">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h5>
      </header>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h3 className="about-category">Get to know me!</h3>
          <Bio />
          <Button
            title="CONTACT"
            url="/contact"
            backgroundColor="#3943B7"
            color="#FFF"
            border="none"
          />
        </div>
        <div>
          <h3 className="about-category">My Skills</h3>
          <Skills />
        </div>
      </div>
    </section>
  );
}
