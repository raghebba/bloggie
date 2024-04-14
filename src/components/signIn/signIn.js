import React, { useState } from "react";
import { loginAnyonymously } from "../../config/firebaseConfig";
import { categories } from "../../data/category";
import AlertComponent from "../../UI/AlertComponent";
import Styles from "./signIn.module.css";

const AlertSignIn = ({ onValueChange, onCategorychange,setIsLoading }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handelLogin = () => {
    loginAnyonymously({setIsLoading});
  };

  const handelInputchange = (event) => {
    onValueChange(event.target.value);
  };

  const handelSelectcategory = (event) => {
    setSelectedCategory(event.target.value);
    onCategorychange(event.target.value);
  };

  return (
    <AlertComponent>
      <div>
        <input
          type="text"
          placeholder="PsuedoName"
          onChange={handelInputchange}
          className={Styles.psuedoInput}
        />
      </div>
      <div>
        <select
          className={Styles.categorySelection}
          onChange={handelSelectcategory}
          value={selectedCategory}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button className={Styles.nextButton} onClick={handelLogin}>
        Next
      </button>
    </AlertComponent>
  );
};

export default AlertSignIn;
