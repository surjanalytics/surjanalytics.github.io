import Section from "src/components/Section";

const About = () => (
  <Section
    id="about"
    title="About us"
    description="What we do at Surjanalytics."
  >
    <div
    // className="h-about"
    >
      <p style={{ lineHeight: 1.5 }} className="f4 fw3 ma0 pa0 w-fc tc">
        We create custom and unique software solutions. We push the boundaries
        of automation and analytics to create the most cutting edge solutions
        possible. <br /> Check out some of our example solutions below. Feel
        free to reach out with any questions, suggestions, new ideas, or usage
        requests!
        <br /> We look forward to hearing from you.
      </p>
    </div>
  </Section>
);

export default About;
