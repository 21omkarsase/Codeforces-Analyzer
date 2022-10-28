import React from "react";

function Contests({ contest }) {
  return (
    <div>
      <p>{contest.contestId}</p>
      <p>{contest.contestName}</p>
      <p>{contest.handle}</p>
      <p>{contest.newRating}</p>
      <p>{contest.oldRating}</p>
      <p>{contest.rank}</p>
    </div>
  );
}

export default Contests;
