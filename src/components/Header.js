import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavBar>
        <NavLink to={'/'} key={1} ><h3>Home</h3></NavLink>
        <NavLink to={'/characters/'} key={2}><h3>Characters</h3></NavLink>
        <NavLink to={'/search/'} key={3}><h3>Search</h3></NavLink>
      </NavBar>
    </header>
  );
}
