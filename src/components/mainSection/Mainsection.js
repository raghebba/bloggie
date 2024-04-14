import React, { useState } from "react";
import Header from "../../UI/Header";
import BlogPostComponent from "../BlogPost/Blogpost";

const Mainsetction = () => {
  const [isBlog, setIsBlog] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const ToggleComponent = () => {
    setIsBlog(prevstate => !prevstate);
  };

  return (
    <div>
      {!isBlog ? (
        <Header ToggleHeader={ToggleComponent} />
      ) : (
        <BlogPostComponent blogstate={ToggleComponent} isLoading={isLoading}
        setIsloading={setIsloading}
        />
      )}
    </div>
  );
};

export default Mainsetction;
