import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserContests } from "../Actions/userAction";
import classes from "./RatingChange.module.css";
import Contest from "./Contests.js";
import { render } from "@testing-library/react";

function RatingChange() {
  const dispatch = useDispatch();
  const { contests } = useSelector((state) => state.contestsInfo);

  useEffect(() => {
    const val = localStorage.getItem("userLocal");
    const nameVals = val.split(`"`);
    if (val) {
      dispatch(getUserContests(nameVals[1]));
    }
  }, [localStorage.getItem("userLocal")]);

  return (
    <>
      <section className={classes.contests}>
        {contests &&
          contests.length > 0 &&
          contests.map((contest) => (
            <Contest key={contest.contestId} contest={contest} />
          ))}
      </section>
    </>
  );
}

export default RatingChange;
