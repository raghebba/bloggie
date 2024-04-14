import React, { useState, useEffect } from "react";
import Styles from "./Header.module.css";
import Logo from "../assests/LOGO.png";
import { FloatingActionButton } from "./FloatingActionButton";
import { signOutAnyonymously } from "../config/firebaseConfig";
import { FaPlus, FaListUl } from "react-icons/fa";

const Header = ({ ToggleHeader,toggleFetchblogging }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    signOutAnyonymously();
  }, []);

  const onStartblogging = () => {
    setIsOpen((prevState) => !prevState);
    ToggleHeader();
  };

  const onFetchblogging = () =>{
    toggleFetchblogging()
  }

  return (
    <header
      className={`${Styles.HeaderStyle} ${
        isOpen ? Styles.open : Styles.closed
      }`}
    >
      <div className={Styles.HeaderContainer}>
        <h4>Welcome to bloggie</h4>
        <img src={Logo} alt="logo" className={Styles.HeaderLogo} />
      </div>
      <FloatingActionButton
        style={{ right: "20px" }}
        onButtonClick={onStartblogging}
      >
        <FaPlus />
      </FloatingActionButton>
      <FloatingActionButton
       onButtonClick={onFetchblogging}
      style={{ left: "20px" }}
      >
        <FaListUl />
      </FloatingActionButton>
    </header>
  );
};

export default Header;
