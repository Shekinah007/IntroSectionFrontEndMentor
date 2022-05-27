// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import mainImage from "./imagesAndIcons/image-hero-mobile.png";
import logoImg from "./imagesAndIcons/logo.svg";
import menuIconImg from "./imagesAndIcons/icon-menu.svg";
import audiophileImg from "./imagesAndIcons/client-audiophile.svg";
import databizImg from "./imagesAndIcons/client-databiz.svg";
import meetImg from "./imagesAndIcons/client-meet.svg";
import makerImg from "./imagesAndIcons/client-maker.svg";
import arrowDownImg from "./imagesAndIcons/icon-arrow-down.svg";
import arrowUpImg from "./imagesAndIcons/icon-arrow-up.svg";
import closeMenuImg from "./imagesAndIcons/icon-close-menu.svg";
import React, { useState } from "react";

function App() {
  let [navOpen, setNavOpen] = useState(true);
  // let wrapper = React.createRef();
  const navBarToggle = () => {
    // setNavOpen((prevState) => !prevState);
    let overlay = document.querySelector(".overlay");
    let navBar = document.querySelector(".nav");
    navBar.classList.toggle("navHidden");
    overlay.classList.toggle("overlayEnabled");
  };

  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="navBar">
        <img src={logoImg} alt="Main Logo"></img>
        <NavBar navBarToggle={navBarToggle} />
        <img
          className="navBtn"
          alt="Menu Icon"
          src={menuIconImg}
          onClick={navBarToggle}
        ></img>

        {/* <div className="nav navHidden">
          <div className="navLinks">
            <span>
              Features <img src={arrowDownImg}></img>
            </span>
            <span>
              Company <img src={arrowDownImg}></img>
            </span>
            <span>Careers</span>
            <span>About</span>
          </div>
          <div className="signIn">
            <a href="#">Login</a>
            <a className="register" href="#">
              Register
            </a>
          </div>
        </div> */}
        {/* {navBarOpen && <NavBar handleOpenNavBar={navBarToggle} />} */}
      </div>
      {/* <img className="mainImage" src={mainImage}></img> */}
      {/* <div className="main"> */}
      <div className="flex">
        <div className="mainImg"></div>
        <div className="flexB">
          <h1 className="mainHeader"> Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <a className="linkLearnMore" href="#">
            Learn More
          </a>
          <div className="clients">
            <img
              className="clientImg"
              alt="Databiz logo"
              src={databizImg}
            ></img>
            <img
              className="clientImg"
              alt="Audiophile logo"
              src={audiophileImg}
            ></img>
            <img className="clientImg" alt="Meet logo" src={meetImg}></img>
            <img className="clientImg" alt="Maker logo" src={makerImg}></img>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
