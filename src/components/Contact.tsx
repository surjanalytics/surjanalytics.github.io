import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "src/components/Section";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

type ContactInfo = {
  icon: IconProp;
  href: string;
  title: string;
  description: string;
};

const CONTACTS = [
  {
    icon: faEnvelope,
    href: "mailto:surettenoah@gmail.com",
    title: "Email",
    description: "Shoot us an email",
  },
  {
    icon: faGithub,
    href: "https://github.com/surjanalytics",
    title: "GitHub",
    description: "Check out our GitHub org",
  },
] as const;

const ContactLink = ({ icon, href, title, description }: ContactInfo) => {
  return (
    <a
      className="flex flex-column ma2 items-center accent-hover"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={icon} size="5x" />
      <h3 className="f3 fw6 ma0 pa0">{title}</h3>
      <p className="f6 fw3 ma0 pa0">{description}</p>
    </a>
  );
};

const Contact = () => {
  return (
    <Section title="Contact" id="contact" description="Get in touch with us.">
      <div className="flex flex-wrap justify-around">
        {CONTACTS.map((contact) => (
          <ContactLink key={contact.title} {...contact} />
        ))}
      </div>
    </Section>
  );
};

export default Contact;
