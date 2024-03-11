import React from "react"
import {FaPlus} from "react-icons/fa"
import Styles from "./FloatingActionButton.module.css"

export const FloatingActionButton = ({onButtonClick}) => {
 return(
  <button className={Styles.fab} onClick={onButtonClick}>
    <FaPlus />
  </button>
 )
}