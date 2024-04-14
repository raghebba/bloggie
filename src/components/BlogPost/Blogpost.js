import React, { useState, useEffect } from "react";
import Styles from "./Blogpost.module.css";
import { database, push, ref } from "../../config/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AlertSignIn from "../signIn/signIn";
import LoadingComponent from "../../UI/LoadingComponent";

const BlogPostComponent = ({
  blogstate,
  isLoading,
  setIsloading,
  blogFetch,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setuser] = useState(null);
  const [PsuedoName, setPsuedoName] = useState("");
  const [choseCat, setChoseCat] = useState("");

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

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handelPsuedoNameChange = (val) => {
    setPsuedoName(val);
  };

  const handelchoseCatChange = (val) => {
    setChoseCat(val);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsloading(true);
    const postRef = ref(database, "post");
    push(postRef, {
      title: title,
      content: content,
      createdAt: new Date().toISOString(),
      Author: PsuedoName,
      category: choseCat,
    })
      .then(() => {
        setTitle("");
        setContent("");
        blogstate();
        alert("Blog Posted successfully");
        setIsloading(false);
      })
      .catch((error) => {
        alert("Error creating post: " + error.message);
      });
  };

  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className={Styles.Blogpostcomponent}>
          <div className={Styles.Editortoolbar}>
            {!user && (
              <AlertSignIn
                onValueChange={handelPsuedoNameChange}
                onCategorychange={handelchoseCatChange}
                setIsLoading={setIsloading}
                blogFetch={blogFetch}
              />
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={Styles.posttitleinput}
              placeholder="Title of your blog post"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              className={Styles.postcontentinput}
              placeholder="Write your blog post here..."
              value={content}
              onChange={handleContentChange}
            />
            <button type="submit" className={Styles.postsubmitbutton}>
              Publish
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BlogPostComponent;
