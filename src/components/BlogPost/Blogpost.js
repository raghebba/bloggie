import React, { useState } from 'react';
import Styles from  './Blogpost.module.css'; // Make sure to create a CSS file for this

const BlogPostComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle the submission of the blog post
  };

  return (
    <div className={Styles.Blogpostcomponent}>
        <div className={Styles.Editortoolbar}>
        {/* Toolbar buttons or elements go here */}
        <button>Format</button>
        <button>Bold</button>
        <button>Italic</button>
        {/* Add other toolbar buttons as needed */}
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
        <button type="submit" className={Styles.postsubmitbutton}>Publish</button>
      </form>
    </div>
  );
};

export default BlogPostComponent;
