import React from "react"
import Styles from "./FloatingActionButton.module.css"

export const FloatingActionButton = ({onButtonClick,children,style}) => {
 return(
  <button style={style} className={Styles.fab} onClick={onButtonClick}>
   {children}
  </button>
 )
}