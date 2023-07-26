export function LinkedinHighlight() {
  return (
    <a
      href="https://www.linkedin.com/in/iambelloopeyemi"
      className="font-bold text-violet-blue hover:underline"
    >
      Linkedin
    </a>
  );
}

export function ContactHighlight() {
  return <span className="text-night font-bold">contact</span>;
}

export const Paragraphs: (() => JSX.Element)[] = [
  () => (
    <>
      I'm a Frontend Web Developer building the Front-end of Websites and Web
      Applications that leads to the success of the overall product. Check out
      some of my work in the Projects section.
    </>
  ),
  () => (
    <>
      I also like sharing content related to the stuff that I have learned over
      the years in Web Development so it can help other people of the Dev
      Community. Feel free to Connect or Follow me on my <LinkedinHighlight />{" "}
      where I post useful content related to Web Development and Programming.
    </>
  ),
  () => (
    <>
      I'm open to Job opportunities where I can contribute, learn and grow. If
      you have a good opportunity that matches my skills and experience then
      don't hesitate to <ContactHighlight /> me.
    </>
  ),
];

export default function Bio() {
  return (
    <article className="article">
      {Paragraphs.map((paragraphFn, index) => (
        <p key={index}>{paragraphFn()}</p>
      ))}
    </article>
  );
}
