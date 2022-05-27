import React from "react";
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
      ></img>
      <div className="navFlex">
        <div className="navLinks">
          <span className="dropdown">
            <a href="#" className="dropBtn" onClick={dropdownToggle1}>
              Features
            </a>
            {/* <img src={arrowDownImg}></img> */}
            <div className="arrows"></div>
            <ul className="dropContent">
              <li>
                <img src={todoImg}></img> <a href="#">Todo List</a>
              </li>
              <li>
                <img src={calendarIcon}></img>
                <a href="#">Calendar</a>
              </li>
              <li>
                <img src={remindersIcon}></img> <a href="#">Reminders</a>
              </li>
              <li>
                <img src={planningIcon}></img> <a href="#">Planning</a>
              </li>
            </ul>
          </span>
          <span className="dropdown">
            <a href="#company" className="dropBtn" onClick={dropdownToggle2}>
              Company
            </a>
            {/* <img src={arrowDownImg}></img> */}
            <div className="arrows"></div>
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
          </span>
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
