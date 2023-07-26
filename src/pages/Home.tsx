import Sidebar from "../components/Sidebar";
import Button from "../components/InternalLink";

export default function Home() {
  return (
    <section className="h-[50rem] hero flex flex-col items-center justify-center">
      <Sidebar />
      <article className="text-center grid gap-20">
        <h1 className="text-5xl font-extrabold">Hey, I'm Opeyemi Bello</h1>
        <h5 className="text-xl">
          A Frontend developer with finesse for building functional and
          responsive web applications
        </h5>
        <Button
          title="PROJECTS"
          url="/projects"
          backgroundColor="#3943B7"
          color="#FFF"
          border="none"
        />
      </article>
    </section>
  );
}
