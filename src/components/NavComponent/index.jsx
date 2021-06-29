import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { HiMenu, HiX } from "react-icons/hi";
import SocialNavGroup from "./SocialNavGroup";
import NavLink from "./NavLink";

const MainContainer = styled(Container)``;

const MainNav = styled(Navbar)`
  text-transform: uppercase;
  transition: 0.3s;
`;

const NavbarToggle = styled(Navbar.Toggle)`
  border: none;
  &:focus {
    outline: none;
  }
`;

export const SocialNavs = styled(Nav)``;

export const screens = [
  {
    title: "About",
    link: "/about",
    color: "#ff0055",
  },
  {
    title: "Web Dev",
    link: "/dev",
    color: "#0099ff",
  },
  {
    title: "Photos",
    link: "/photos",
    color: "#ffaa00",
  },
  {
    title: "Cycling",
    link: "/cycling",
    color: "#ffaa00",
  },
  {
    title: "Contact",
    link: "/contact",
    color: "#ffaa00",
  },
];

function NavComponent() {
  const [navOpen, toggleNav] = useState(false);
  return (
    <MainNav sticky="top" expand="md" className="main-nav">
      <MainContainer>
        <Navbar.Brand href="/" style={{ fontSize: 40, fontWeight: 900 }}>
          Ansel.
        </Navbar.Brand>
        <NavbarToggle
          onClick={() =>
            setTimeout(() => {
              toggleNav(!navOpen);
            }, 100)
          }
          aria-controls="responsive-navbar-nav"
        >
          {navOpen ? (
            <HiX style={{ fontSize: 24 }} />
          ) : (
            <HiMenu style={{ fontSize: 24 }} />
          )}
        </NavbarToggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {screens.map(({ title, color, link }, i) => (
              <NavLink link={link}> {title} </NavLink>
            ))}
          </Nav>
          <SocialNavGroup />
        </Navbar.Collapse>
      </MainContainer>
    </MainNav>
  );
}

export default NavComponent;
