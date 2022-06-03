import React, { useState } from "react";
import arrowDownImg from "../imagesAndIcons/icon-arrow-down.svg";
import arrowUpImg from "../imagesAndIcons/icon-arrow-up.svg";
import closeMenuImg from "../imagesAndIcons/icon-close-menu.svg";
import todoImg from "../imagesAndIcons/icon-todo.svg";
import planningIcon from "../imagesAndIcons/icon-planning.svg";
import calendarIcon from "../imagesAndIcons/icon-calendar.svg";
import remindersIcon from "../imagesAndIcons/icon-reminders.svg";

const NavBar = ({ navBarToggle }) => {
  const dropdownToggle1 = () => {
    // let dropContent = document.querySelectorAll(".dropContent")[0];
    // dropContent.classList.toggle("dropHide");
  };

  let [isOpen1, setIsOpen1] = useState(true);
  let [isOpen2, setIsOpen2] = useState(true);
  const dropdownToggle2 = () => {
    // let dropContent = document.querySelectorAll(".dropContent")[1];
    // console.log(dropContent);
    // dropContent.classList.toggle("dropHide");
  };

  return (
    <div className="nav navHidden">
      <img
        onClick={navBarToggle}
        className="closeMenuBtn"
        src={closeMenuImg}
        alt="Close Icon"
      ></img>
      <div className="navFlex">
        <div className="navLinks">
          <div className="dropdown">
            <a
              href="#"
              className="dropBtn"
              onClick={() => setIsOpen1((prevState) => !prevState)}
            >
              Features
            </a>

            <div className="arrows"></div>
            {/* {isOpen1 ? (
              <img src={arrowUpImg}></img>
            ) : (
              <img src={arrowDownImg}></img>
            )} */}
            {isOpen1 && (
              <ul className="dropContent">
                <li>
                  <img src={todoImg} alt="Todo Icon"></img>
                  <a href="#">Todo List</a>
                </li>
                <li>
                  <img src={calendarIcon} alt="Calendar Icon"></img>
                  <a href="#">Calendar</a>
                </li>
                <li>
                  <img src={remindersIcon} alt="Reminders Icon"></img>
                  <a href="#">Reminders</a>
                </li>
                <li>
                  <img src={planningIcon} alt="Planning Icon"></img>
                  <a href="#">Planning</a>
                </li>
              </ul>
            )}
          </div>
          <div className="dropdown">
            <a
              href="#company"
              className="dropBtn"
              onClick={() => setIsOpen2((prevState) => !prevState)}
            >
              Company
            </a>
            <div className="arrows"></div>
            {isOpen2 && (
              <ul className="dropContent">
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            )}
          </div>
          <a href="#">Careers</a>
          <a href="#">About</a>
        </div>
        <div className="signIn">
          <a href="#">Login</a>
          <a className="register" href="#">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
