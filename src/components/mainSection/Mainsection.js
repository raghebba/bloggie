import React, { useState } from "react";
import Header from "../../UI/Header";
import BlogPostComponent from "../BlogPost/Blogpost";

const Mainsetction = () => {
  const [isBlog, setIsBlog] = useState(false);

  const ToggleCompnent = () => {
    setInterval(() => {
      setIsBlog((true));
    }, 600);
  };

  return (
    <div>
      {!isBlog ? (
        <Header ToggleHeader={ToggleCompnent} />
      ) : (
        <BlogPostComponent />
      )}
    </div>
  );
};

export default Mainsetction;
