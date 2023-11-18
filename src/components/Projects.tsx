import Section from "src/components/Section";

type Props = {
  title: string;
  img: string;
  description: string;
  href: string;
};

const PROJECTS = [
  {
    title: "FirmEye",
    img: "/img/firmeye.png",
    href: "/firmeye/",
    description: "Your analysis tool for getting all the info on any business.",
  },
  {
    title: "ElectionEye",
    img: "/img/electioneye.png",
    href: "/electioneye/",
    description: "A tool for analyzing the 2024 US Presidential Election.",
  },
] as const;

const Project = ({ title, img, description, href }: Props) => {
  return (
    <div className="pa2 mv2 pc-w">
      <a
        className="flex flex-column accent-hover"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt="" style={{ maxHeight: 400 }} className="br2" />
        <h2 className="ma0 mv1 f3 fw6">{title}</h2>
        <p className="ma0 fw4">{description}</p>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Here's what I've been up to."
    >
      <div className="flex flex-wrap justify-around">
        {PROJECTS.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
