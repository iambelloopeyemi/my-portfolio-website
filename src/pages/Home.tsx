import Sidebar from "../components/Sidebar";
import Button from "../components/Button";

export default function Home() {
  return (
    <section className="bg-hero-pattern h-200 grid justify-center items-center">
      <Sidebar />
      <article className="w-225 h-75 grid justify-items-center place-content-between">
        <h1 className="font-extrabold text-6xl">Hey, I'm Opeyemi Bello</h1>
        <h5 className="text-xl">
          A Frontend developer with finesse for building functional and
          responsive web software applications
        </h5>
        <Button
          name="PROJECTS"
          url="/projects"
          backgroundColor="#FACF0F"
          border="none"
        />
      </article>
    </section>
  );
}
