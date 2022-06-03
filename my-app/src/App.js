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
  const navBarToggle = () => {
    let overlay = document.querySelector(".overlay");
    let navBar = document.querySelector(".nav");
    navBar.classList.toggle("navHidden");
    overlay.classList.toggle("overlayEnabled");
  };

  return (
    <main className="App">
      <div className="overlay"></div>
      <div className="navBar">
        <header>
          <img role="banner" src={logoImg} alt="Main Logo"></img>
        </header>

        <NavBar navBarToggle={navBarToggle} />
        <img
          className="navBtn"
          alt="Menu Icon"
          src={menuIconImg}
          onClick={navBarToggle}
        ></img>
      </div>

      <div className="flex">
        <div className="imgContainer">
          <img className="mainImage" alt="Main Image"></img>
        </div>
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
      </div>
      <footer>
        <p>
          Challenge by <a href="#">Frontend Mentor.</a> Coded by{" "}
          <a href="#">Shekinah Shalom-Hope</a>
        </p>
      </footer>
    </main>
  );
}

export default App;
