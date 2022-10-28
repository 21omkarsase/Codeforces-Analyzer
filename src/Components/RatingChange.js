import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserContests } from "../Actions/userAction";
import classes from "./RatingChange.module.css";
import Contest from "./Contests.js";

function RatingChange() {
  const dispatch = useDispatch();
  const { contests } = useSelector((state) => state.contestsInfo);
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    if (user) {
      dispatch(getUserContests(user.handle));
    }
  }, [user, dispatch]);

  return (
    <>
      <section className={classes.contests}>
        {contests && contests.map((contest) => <Contest contest={contest} />)}
      </section>
    </>
  );
}

export default RatingChange;
