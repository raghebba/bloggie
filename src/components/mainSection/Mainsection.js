import React, { useState } from "react";
import Header from "../../UI/Header";
import BlogPostComponent from "../BlogPost/Blogpost";
import FetchBlogs from "../fetchBlogs/fetchBlogs";

const Mainsetction = () => {
  const [isBlogpost, setIsBlogpost] = useState(false);
  const [isBlogfetch, SetIsBlogfetch] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const ToggleComponent = () => {
    setIsBlogpost((prevstate) => !prevstate);
  };

  const Toggleblogfetch = () => {
    SetIsBlogfetch((prevstate) => !prevstate);
  };

  return (
    <div>
      {!isBlogpost && !isBlogfetch ? (
        <Header
          ToggleHeader={ToggleComponent}
          toggleFetchblogging={Toggleblogfetch}
        />
      ) : isBlogpost && !isBlogfetch ? (
        <BlogPostComponent
          blogstate={ToggleComponent}
          isLoading={isLoading}
          setIsloading={setIsloading}
          blogFetch={isBlogfetch}
        />
      ) : (
        <FetchBlogs 
        setIsloading={setIsloading}
        blogFetch={isBlogfetch}
        />
      )}
    </div>
  );
};

export default Mainsetction;
