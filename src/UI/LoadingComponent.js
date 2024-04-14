import React from 'react';
import Styles from './loadingComponent.module.css';  // Make sure to link the correct CSS file

const LoadingComponent = () => {
  return (
    <div className={Styles.loadingContainer}>
      <div className={Styles.spinner}></div>
    </div>
  );
};

export default LoadingComponent;
