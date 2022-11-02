import React, { useState, useEffect } from "react";
import { getSubmissions } from "../../Actions/userAction";
import classes from "./Submissions.module.css";
import Submission from "./Submission";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader";
import Error from "../Layout/Error";
function Submissions() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { submissions, loading, error } = useSelector(
    (state) => state.userSubmissions
  );
  const { user } = useSelector((state) => state.userInfo);
  const fetchSubmissions = () => {
    if (user) {
      dispatch(getSubmissions(user.handle, count));
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchSubmissions();
    setCount("");
  };
  return (
    <section className={classes.submissions}>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setCount(e.target.value)}
          value={count}
          type="number"
          required
          placeholder="Enter count of submissions"
        />
        <button>submit</button>
      </form>
      <div className={classes.subs}>
        {error && !submissions && <Error error={error} />}
        {loading && <Loader />}
        {!loading &&
          submissions &&
          submissions.length > 0 &&
          submissions.map((sub) => <Submission key={sub.id} sub={sub} />)}
      </div>
    </section>
  );
}

export default Submissions;
