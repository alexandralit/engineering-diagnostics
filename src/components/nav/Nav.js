import React from "react";
import "./style.scss";

const Nav = ({menuIsOpen, setMenuIsOpen}) => {
  const toggleMenu = (e) => {
    if (e.target !== e.currentTarget) setMenuIsOpen(!menuIsOpen);
  }
  
  return (
    <nav className={menuIsOpen ? "nav nav-open" : "nav"} onClick={(event) => toggleMenu(event)}>
      <a className="nav-link" href="#main">Главная</a>
      <a className="nav-link" href="#benefits">Преимущества</a>
      <a className="nav-link" href="#services">Услуги</a>
      <a className="nav-link" href="#сoncept">Комплекс работ</a>
      <div className="close"></div>
    </nav>
  );
}

export default Nav;