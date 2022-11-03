import React from "react";
import classes from "./Contests.module.css";

function Contests({ contest }) {
  const contestURL = `https://codeforces.com/contest/${contest.id}`;
  return (
    <div className={classes.contest}>
      <p>Contest ID : {contest.contestId}</p>
      <p>
        Contest Name :
        <a target="_blank" href={contestURL}>
          {contest.contestName}
        </a>{" "}
      </p>
      <p>Rating Before contest : {contest.newRating}</p>
      <p>Rating After contest : {contest.oldRating}</p>
      <p>Contest Rank : {contest.rank}</p>
    </div>
  );
}

export default Contests;
