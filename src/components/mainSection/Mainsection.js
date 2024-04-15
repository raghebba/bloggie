import React, { useState ,useEffect } from "react";
import Header from "../../UI/Header";
import BlogPostComponent from "../BlogPost/Blogpost";
import FetchBlogs from "../fetchBlogs/fetchBlogs";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Mainsetction = () => {
  const [isBlogpost, setIsBlogpost] = useState(false);
  const [isBlogfetch, SetIsBlogfetch] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [user, setuser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
    });
    return () => unsubscribe();
  }, []);

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
          user={user}
        />
      ) : (
        <FetchBlogs 
        setIsloading={setIsloading}
        blogFetch={isBlogfetch}
        user={user}
        isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default Mainsetction;
