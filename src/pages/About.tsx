import Underline from "../components/Underline";
import Bio from "../components/Bio";
import Button from "../components/InternalLink";
import { Skills } from "../utils/Skills";

export default function About() {
  return (
    <section
      id="about"
      className="bg-anti-flash-white h-fit px-5 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-14"
    >
      <header className="text-center flex flex-col items-center gap-3 sm:gap-5 mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase">about me</h2>
        <Underline />
      </header>
      <div className="grid sm:grid-cols-2 gap-14 sm:gap-10 mb-16">
        <div>
          <h3 className="text-2xl text-center font-bold mb-6 sm:mb-8">
            Get to know me!
          </h3>
          <Bio />
          <div className="flex justify-center sm:justify-start">
            <Button
              title="CONTACT"
              url="/contact"
              backgroundColor="#3943B7"
              color="#FFF"
              border="none"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl text-center font-bold mb-6 sm:mb-8">
            My Skills
          </h3>
          <ul className="flex justify-center sm:justify-start flex-wrap gap-5">
            {Skills.map(({ icon }, index) => (
              <li key={index} className="text-night">
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
