import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import "src/components/modules/nav.css";
import Link from "src/components/basic/Link";
import { ReactComponent as Logo } from "src/img/logo.svg";

type NavlinkProps = {
  to: string;
  children: React.ReactNode;
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const Navlink = ({ to, children }: NavlinkProps) => (
    <li className="navlink-li">
      <Link to={to} onClick={closeMenu} className="navlink" unstyled>
        {children}
      </Link>
    </li>
  );

  return (
    <>
      <nav
        className={`flex items-center justify-between w-100 nav pv2 ph4`}
        id="nav"
      >
        <div className="flex items-center justify-between bar-container">
          <Link to="/" className="flex items-center" unstyled>
            <Logo height="32px" />
            <span className="ml2 nav-title desktop">FirmEye</span>
          </Link>
          <div className="mobile">
            <Hamburger
              toggled={open}
              onToggle={() => setOpen(!open)}
              direction="left"
              size={24}
              duration={0.3}
            />
          </div>
        </div>
        <ul
          className={`flex items-center desktop link-container`}
          style={{ display: open ? "flex" : undefined }}
        >
          <Navlink to="/">Home</Navlink>
          <Navlink to="/upload">Upload</Navlink>
          <Navlink to="/about">About</Navlink>
        </ul>
      </nav>
      <div className="nav-padding" />
    </>
  );
};

export default Nav;
