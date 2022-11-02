import React, { useState, useEffect } from "react";
import { getSubmissions } from "../../Actions/userAction";
import classes from "./Submissions.module.css";
import Submission from "./Submission";
import { useDispatch, useSelector } from "react-redux";
function Submissions() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { submissions } = useSelector((state) => state.userSubmissions);
  const fetchSubmissions = () => {
    const val = localStorage.getItem("userLocal");
    const nameVals = val.split(`"`);
    dispatch(getSubmissions(nameVals[1], count));
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
          placeholder="Enter count of submissions"
        />
        <button>submit</button>
      </form>
      <div className={classes.subs}>
        {submissions &&
          submissions.length > 0 &&
          submissions.map((sub) => <Submission key={sub.id} sub={sub} />)}
        {!submissions && <p>No Submissions Found</p>}
      </div>
    </section>
  );
}

export default Submissions;
