import React, { useState } from "react";
import { loginAnyonymously } from "../../config/firebaseConfig";
import { categories } from "../../data/category";
import AlertComponent from "../../UI/AlertComponent";

const AlertSignIn = ({ onValueChange,onCategorychange }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handelLogin = () => {
    loginAnyonymously();
  };

  const handelInputchange = (event) => {
    onValueChange(event.target.value);
  };

  const handelSelectcategory = (event) => {
    setSelectedCategory(event.target.value);
    onCategorychange(event.target.value)
  };

  return (
    <AlertComponent>
      <label>PsuedoName</label>
      <input
        type="text"
        placeholder="the author of the blog"
        onChange={handelInputchange}
      />
      <label>Category</label>
      <select onChange={handelSelectcategory} value={selectedCategory}>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button onClick={handelLogin}>Register</button>
    </AlertComponent>
  );
};

export default AlertSignIn;
