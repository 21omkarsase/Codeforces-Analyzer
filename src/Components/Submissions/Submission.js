import React from "react";
import classes from "./Submission.module.css";

function Submission({ sub }) {
  const solutionLink = `https://codeforces.com/contest/${sub.contestId}/submission/${sub.id}`;
  const problemLink = `https://codeforces.com/contest/${sub.contestId}/problem/${sub.problem.index}`;
  const memoryUsed = sub.memoryConsumedBytes / 1000000;
  return (
    <div className={classes.sub}>
      <p>
        Problem :{" "}
        <a href={problemLink} target="_blank">
          {sub.problem.name}
        </a>
      </p>
      <p>Verdict: {sub.verdict}</p>
      <a target="_blank" href={solutionLink}>
        Solution
      </a>
      <p>Language : {sub.programmingLanguage}</p>
      <p>Time Consumed : {sub.timeConsumedMillis} Ms</p>
      <p>Memeory Consumed : {memoryUsed} MB</p>
      <p>
        Tags :
        {sub.problem.tags.map((tag) => (
          <span>{tag} </span>
        ))}
      </p>
      <p>Problem Rating : {sub.problem.rating}</p>
    </div>
  );
}

export default Submission;
