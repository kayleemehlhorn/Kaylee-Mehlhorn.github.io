import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import KellenStuartLogo from "./KellenStuartLogo";
import SeniorSoftwareEngineerLogo from "./SeniorSoftwareEngineerLogo";

function KSNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="px-3 print-hide">
      <Navbar.Brand
        as={Link}
        to="/"
        className="link-black navbar-hover-link"
        data-label="Cover Letter"
        aria-label="Cover Letter"
      >
        <KellenStuartLogo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Navbar.Brand>
            <SeniorSoftwareEngineerLogo />
          </Navbar.Brand>
          <Nav.Link
            as={Link}
            to="/resume"
            className="navbar-icon-link"
            data-label="Resume"
            aria-label="Resume"
          >
            <FontAwesomeIcon icon={faFile} className="fa-xl link-black navbar-icon" />
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className="navbar-icon-link"
            data-label="Contact"
            aria-label="Contact"
          >
            <FontAwesomeIcon icon={faAddressCard} className="fa-xl link-black navbar-icon" />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/kaylee-mehlhorn-4aa17595/"
            target="_blank"
            rel="noreferrer"
            className="navbar-icon-link"
            data-label="LinkedIn"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-xl link navbar-icon" />
          </Nav.Link>
          <Nav.Link
            href="https://github.com/kayleemehlhorn"
            target="_blank"
            rel="noreferrer"
            className="navbar-icon-link"
            data-label="GitHub"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-xl link-black navbar-icon" />
          </Nav.Link>
          <Nav.Link
            href="https://www.instagram.com/kaylee_mehlhorn/"
            target="_blank"
            rel="noreferrer"
            className="navbar-icon-link"
            data-label="Instagram"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="fa-xl link-pink navbar-icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default KSNavbar;
