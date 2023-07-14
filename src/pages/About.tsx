import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import Skills from "../components/Skills";

export default function About() {
  return (
    <div className="bg-very-light-gray h-fit px-16 pt-28 pb-8">
      <div className="mb-5">
        <h1 className="font-bold text-4xl text-center mb-5">ABOUT ME</h1>
        <h5 className="text-center text-xl">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h5>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <section>
          <h3 className="font-bold text-2xl mb-6">Get to know me!</h3>
          <article className="text-davy-grey text-justify leading-6 mb-8">
            {Paragraphs.map((paragraphFn, index) => (
              <p key={index} className="mb-2">
                {paragraphFn()}
              </p>
            ))}
          </article>
          <Button
            name="CONTACT"
            url="/contact"
            backgroundColor="#FACF0F"
            border="none"
          />
        </section>
        <section>
          <h3 className="font-bold text-2xl mb-6">My Skills</h3>
          <Skills />
        </section>
      </div>
    </div>
  );
}
