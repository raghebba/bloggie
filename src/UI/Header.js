import React from "react";
import Styles from "./Header.module.css";
import Logo from "../assests/LOGO.png";
import { FloatingActionButton } from "./FloatingActionButton";

const Header = () => {
  const onStartblogging = () => {
    console.log("start");
  };

  return (
    <header className={Styles.HeaderStyle}>
      <div className={Styles.HeaderContainer}>
        <h4>Welcome to bloggie</h4>
        <img src={Logo} alt="logo" className={Styles.HeaderLogo} />
      </div>
      <FloatingActionButton onButtonClick={onStartblogging} />
      {/*
      <button 
        className={Styles.Startblogging}
        >
       Start Blogging
        </button>
  */}
    </header>
  );
};

export default Header;
