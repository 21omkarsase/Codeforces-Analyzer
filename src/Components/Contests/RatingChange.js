import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserContests } from "../../Actions/userAction";
import classes from "./RatingChange.module.css";
import Contest from "./Contests.js";
import Loader from "../Layout/Loader";
import Error from "../Layout/Error";

function RatingChange() {
  const dispatch = useDispatch();
  const { contests, loading, error } = useSelector(
    (state) => state.contestsInfo
  );

  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (user) {
      dispatch(getUserContests(user.handle));
    }
  }, [user]);

  return (
    <>
      <section className={classes.contests}>
        {!error && loading && <Loader />}
        {!error &&
          !loading &&
          contests &&
          contests.length > 0 &&
          contests.map((contest) => (
            <Contest key={contest.contestId} contest={contest} />
          ))}
        {error && <Error error={error} />}
      </section>
    </>
  );
}

export default RatingChange;
