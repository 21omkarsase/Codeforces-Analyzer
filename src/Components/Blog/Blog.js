import React from "react";
import classes from "./Blog.module.css";
function Blog({ blog }) {
  const blogURL = `https://codeforces.com/blog/entry/${blog.id}`;
  const blogTitle = blog.title.slice(3, -4);
  let date = new Date(blog.creationTimeSeconds * 1000);
  return (
    <div className={classes.blog}>
      {blogTitle}
      <p>{date.toUTCString().slice(0, -12)}</p>
      <p>
        <a target="_blank" href={blogURL}>
          Blog Link
        </a>
      </p>
      <p>Rating : {blog.rating}</p>
    </div>
  );
}

export default Blog;
