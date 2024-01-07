import { useState } from "react";
import React from "react";
import logo from "../assets/images/logo.svg";
import chevronUp from "../assets/images/icon-arrow-up.svg";
import chevronDown from "../assets/images/icon-arrow-down.svg";
import menuOpen from "../assets/images/icon-menu.svg";
import todolist from "../assets/images/icon-todo.svg";
import calender from "../assets/images/icon-calendar.svg";
import reminder from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";
import closeMenu from "../assets/images/icon-close-menu.svg";


const Header = () => {
    const [openFeatures, setOpenFeatures] = useState(false)
    const [openCompany, setCompany] = useState(false)

    const handleOpenMenu = () => {
        const navbar = document.querySelector(".navbar");
        const menuButton = document.querySelector(".menu-button");

        navbar.classList.toggle("open");

        if (navbar.classList.contains("open")) {
            menuButton.src = closeMenu;
        } else {
            menuButton.src = menuOpen;
        }
    }

  return (
    <header className="header">
      <div className="navlink" >
        <img src={logo} alt="" className="logomargin" />

        <nav className="navbar">
          <div>
            <button onClick={() => setOpenFeatures(!openFeatures)} className="arrow-icon">
              Features {openFeatures ? <img src={chevronUp} alt="" className="arrow" /> : <img src={chevronDown} alt="" className="arrow" />}
            </button>

            {openFeatures && <ul className="navul">
              <li className="navli">
                <img src={todolist} alt="" className="img-li"/>
                Todo List
              </li>
              <li className="navli">
                <img src={calender} alt="" className="img-li"/>
                Calendar
              </li>
              <li className="navli">
                <img src={reminder} alt="" className="img-li"/>
                Reminder
              </li>
              <li className="navli">
                <img src={planning} alt=""  className="img-li"/>
                Planning
              </li>
            </ul>}
          </div>
          <div>
            <button onClick={() => setCompany(!openCompany)} className="arrow-icon">
              Company {openCompany ? <img src={chevronUp} alt="" className="arrow" /> : <img src={chevronDown} alt="" className="arrow" />}
            </button>

            {openCompany && <ul className="navul">
              <li className="navli">Histroy</li>
              <li className="navli">Our Team</li>
              <li className="navli">Blog</li>
            </ul>}
          </div>
          <div className="navcareer">
            <button>Careers</button>
          </div>
          <div>
            <button>About</button>
          </div>
        </nav>
      </div>

      <div className="menubutton">
        <button onClick={handleOpenMenu}>
          <img src={menuOpen} alt="" className="menu-button" />
        </button>
      </div>

      <div className="logreg">
        <button className="login">login</button>
        <button className="register">Register</button>
      </div>
    </header>
  );
};

export default Header;
