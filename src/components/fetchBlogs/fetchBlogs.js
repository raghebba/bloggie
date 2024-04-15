import { database, onValue, ref } from "../../config/firebaseConfig";
import React, { useEffect, useState } from "react";
import Styles from "./fetchBlogs.module.css";
import AlertSignIn from "../signIn/signIn";
import LoadingComponent from "../../UI/LoadingComponent";
import BlogCategory from "./blogscategory/blogsCateogry";

const FetchBlogs = ({ setIsloading, blogFetch, user ,isLoading}) => {
  const [blogs, setBlogs] = useState([]);
  const [PsuedoName, setPsuedoName] = useState("");

  useEffect(() => {
    const blogref = ref(database, "post/");
    if (user)
      onValue(blogref, (snapshot) => {
        const data = snapshot.val();
        const bloglist = data
          ? Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }))
          : [];
        setBlogs(bloglist);
      });
  }, [user]);

  const handelPsuedoNameChange = (val) => {
    setPsuedoName(val);
  };

  console.log(blogs);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className={Styles.fetchbBogComponent}>
          {!user && (
            <AlertSignIn
              onValueChange={handelPsuedoNameChange}
              setIsLoading={setIsloading}
              blogFetch={blogFetch}
            />
          )}
          <h1>blogs for user {PsuedoName}</h1>
          <BlogCategory />
        </div>
      )}
    </>
  );
};

export default FetchBlogs;
