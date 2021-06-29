import React from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { phoneOnly } from "../../../util/breakpoints";
import { red } from "../../../styles/colors";

const Link = styled(Nav.Link)`
  font-weight: 500;
  font-size: 12px;
  color: black !important;
  &:hover {
    color: ${red} !important;
  }
  ${phoneOnly(`
    color: rgba(0,0,0,.5) !important;
   `)}
`;

function NavLink(props) {
  return <Link href={props.link}> {props.children} </Link>;
}

export default NavLink;
