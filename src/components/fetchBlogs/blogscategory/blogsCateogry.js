import React from "react";
import { categories } from "../../../data/category";
import DisplayBox from "../../../UI/DisplayBox";

const BlogCategory = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        justifyContent: "center"
      }}
    >
      {categories.slice(1).map((category) => (
        <DisplayBox
          icon={<category.Icon size={48} color="#333" />}
          name={category.name}
        />
      ))}
    </div>
  );
};

export default BlogCategory;
