import React from "react";
import Logo from "../../objects/Logo";
import About from "../../objects/About";
import Menu from "../../objects/Menu";

const Header = () => {
  return (
    <header>
      <Logo />
      <About />
      <Menu />
    </header>
  );
};

export default Header;
