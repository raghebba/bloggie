import React, { useState, useEffect } from "react";
import Styles from "./Blogpost.module.css";
import { database, push, ref } from "../../config/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AlertSignIn from "../signIn/signIn";

const BlogPostComponent = ({ blogstate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setuser] = useState(null);
  const [PsuedoName, setPsuedoName] = useState("");
  const [choseCat, setChoseCat] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        alert(`Logged in as Anonymous User with ID: ${user.uid}`);
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
    const postRef = ref(database, "post");
    push(postRef, {
      title: title,
      content: content,
      createdAt: new Date().toISOString(),
      Author: PsuedoName,
      category: choseCat,
    })
      .then(() => {
        alert("Post created successfully!");
        // Reset the form or handle as necessary
        setTitle("");
        setContent("");
        blogstate();
      })
      .catch((error) => {
        alert("Error creating post: " + error.message);
      });
  };

  return (
    <div className={Styles.Blogpostcomponent}>
      <div className={Styles.Editortoolbar}>
        {!user && (
          <AlertSignIn
            onValueChange={handelPsuedoNameChange}
            onCategorychange={handelchoseCatChange}
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
  );
};

export default BlogPostComponent;
