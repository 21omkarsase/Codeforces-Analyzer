import React from "react";
import classes from "./Problem.module.css";
function Problem({ prob }) {
  const problemLink = `https://codeforces.com/contest/${prob.contestId}/problem/${prob.index}`;
  return (
    <tr>
      <td>{prob.name}</td>
      <td>{prob.rating}</td>
      <td>{prob.points || "-"}</td>
    </tr>
  );
}

export default Problem;

{
  /* <p>
        Problem :{" "}
        <a href={problemLink} target="_blank">
          {prob.name}
        </a>
      </p>
      <p></p> */
}
