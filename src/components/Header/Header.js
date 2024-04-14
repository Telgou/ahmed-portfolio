import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { HomeRounded, Telegram } from "@material-ui/icons";
import CustomButton from "../CustomButton/CustomButton";
import resumeData from "../../utils/resumeData";
import resumeDataFR from "../../utils/resumeData FR";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./Header.css";

function Header({ props, setLanguage, language }) {
  const pathName = props?.location?.pathname;
  const resumeDataTranslated = language === "en" ? resumeData : resumeDataFR;
  return (
    <Navbar expand={"lg"} sticky={"top"} className={"header"}>
      {/* Home Link */}
      <Nav.Link as={NavLink} to={"/"} className={"header_navlink"}>
        <Navbar.Brand className={"header_home"}>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to={"/"}
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to={"/portfolio"}
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
          <button className="border-0 bg-white"  onClick={() => setLanguage('en')}>
            <span class="fi fi-us"></span>
          </button>
          <button className="border-0 bg-white"  onClick={() => setLanguage('fr')}>
            <span class="fi fi-fr"></span>
          </button>

        </Nav>

        <div className="header_right">
          {Object.keys(resumeDataTranslated.socials).map((key) => (
            <a
              href={resumeDataTranslated.socials[key].link}
              target={"_blank"}
              rel="noreferrer"
            >
              {resumeDataTranslated.socials[key].icon}
            </a>
          ))}
          <a
            className={"hireme_btn"}
            //href={resumeDataTranslated.socials.Telegram.link}
            href={`mailto:${resumeDataTranslated.email}`}
            target={"_blank"}
            rel="noreferrer"
          >
            <CustomButton text={language == "en" ? "Hire Me" : "M'Embaucher"} icon={<Telegram />} />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
