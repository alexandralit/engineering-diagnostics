import React, { useState } from "react";
import "./style.scss";
import logo from "./../../assets/img/logo.svg";
import Nav from '../nav/Nav';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false); 

  return (
    <>
      {menuIsOpen && <Nav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />}
      <header className="header">
        <div className="container">
          <div className="wrapper">
            <div className="burger-menu" onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <span className="burger-menu_lines"><span></span><span></span></span>
            </div>
            <img className="header-logo" src={logo} alt="логотип" />
          </div>
          <div className="wrapper">
            <div className="email_container">
              <p className="text">Пишите нам на email</p>
              <a className="email" href="mailto:info@diagnistics.by" target="_blank" rel="noreferrer">info@diagnistics.by</a>
            </div>
            <div className="phone_container">
              <p className="text">Есть вопросы? Звоните!</p>
              <a className="phone" href="tel:+375294564545" target="_blank" rel="noreferrer">+375 (29) 456-45-45</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;