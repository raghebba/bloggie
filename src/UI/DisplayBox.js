import React from 'react';
import Styles from'./DisplayBox.module.css';  // Make sure to link the CSS file

function DisplayBox({ icon, name }) {
  return (
    <div className={Styles.categoryBox} >
      <div className={Styles.iconcontainer}>{icon}</div>
      <div className={Styles.nameBlurbackground}>
        <span className={Styles.categoryName}>{name}</span>
      </div>
    </div>
  );
}

export default DisplayBox