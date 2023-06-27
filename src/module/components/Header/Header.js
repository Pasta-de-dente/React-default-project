import React from "react";
import { Link } from "react-router-dom";
import { BiHelpCircle } from "react-icons/bi";
import "./HeaderStyle.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <BiHelpCircle id="icon" />{" "}
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/sessao">
          <h1>Login</h1>
        </Link>{" "}
        <Link to="/criarTeste">
          <h1>Criaçao</h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
