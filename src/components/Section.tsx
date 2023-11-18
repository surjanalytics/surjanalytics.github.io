import type { ReactNode } from "react";
type Props = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
};

const Section = ({ title, id, children, description }: Props) => (
  <section id={id}>
    <h1 className="section-title tc ma0 pa0">{title}</h1>
    <p className="tc ma0 pa1">{description}</p>
    <div
      style={{ width: 50, height: 5 }}
      className="m-auto mt2 mb3 bg-accent"
    />
    {children}
  </section>
);

export default Section;
