import Page from "src/components/modules/Page";

const About = () => {
  return (
    <Page title="About FirmEye">
      <p className="w-70-90 mt0" style={{ lineHeight: 1.6 }}>
        For each business you submit to FirmEye, our system will give you an
        excel report based on its findings. It endeavors to include the
        following information as accurately as possible:
        <ol className="pl3">
          <li>
            Every location of the business, colored green or yellow depending on
            the system’s certainty. These locations will be ranked by projected
            revenue relative to each other using our custom regression
          </li>
          <li>
            The names, phone numbers, ages, and locations of the owners of the
            company it finds
          </li>
          <li>Ratings and reviews from customers of the company</li>
          <li>
            Ratings and reviews from employees of the company’s management
          </li>
          <li>
            Information about competitors that operate in the same states,
            including number of competitors, average payroll, number of
            employees, and average employee salary
          </li>
        </ol>
        Let FirmEye automate hours of research, formatting, and extrapolation!
      </p>
    </Page>
  );
};

export default About;
