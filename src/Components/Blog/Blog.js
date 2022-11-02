import React from "react";
import classes from "./Blog.module.css";
function Blog({ blog }) {
  const blogURL = `https://codeforces.com/blog/entry/${blog.id}`;
  return (
    <div className={classes.blog}>
      <p>{blog.title}</p>
      <p>
        <a target="_blank" href={blogURL}>
          Blog Link
        </a>
      </p>
      <p>Rating : {blog.rating}</p>
      <p>{}</p>
      <p>{}</p>
    </div>
  );
}

export default Blog;
