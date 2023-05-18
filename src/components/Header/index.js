import React from "react";
import Logo from "../../objects/Logo";
import About from "../../objects/About";
import Menu from "../../objects/Menu";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <About />
      <Menu />
    </header>
  );
};

export default Header;
