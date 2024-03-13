import React, { useState } from "react";
import Styles from "./Header.module.css";
import Logo from "../assests/LOGO.png";
import { FloatingActionButton } from "./FloatingActionButton";

const Header = ({ToggleHeader}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onStartblogging = () => {
    setIsOpen((prevState) => !prevState);
    ToggleHeader()
  };

  return (
    <header
      className={`${Styles.HeaderStyle} ${isOpen ? Styles.open : Styles.closed}`}
    >
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
